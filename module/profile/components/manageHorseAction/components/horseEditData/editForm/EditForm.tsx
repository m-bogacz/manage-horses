import React from 'react';
import { InputField } from '@/shared/inputs/InputField';
import { RadioInput } from '@/shared/inputs/RadioInput';
import { DatePickerInput } from '@/shared/inputs/datePickerInput/DatePickerInput';
import { ButtonGroup, Divider, Flex, FormControl } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { formFields } from './utils/helpers';
import { useHorseContext } from '@/apps/context/HorseContext';
import { FormButton } from '@/shared/button/FormButton';
import { CloseButton } from '@/shared/button/CloseButton';
import { CreatableSelect } from '@/shared/createableSelect/CreatableSelect';
import { useMutationsUpdateHorse } from '../hooks/useMutationsUpdateHorse';
import { returnNameofObject } from '@/module/addHorseForm/components/form/utils/helpers';

interface IOption {
  value: string;
  label: string;
}
function removeNullFields<T>(obj: any): T {
  const keys = Object.keys(obj) as (keyof T)[];

  keys.forEach((key) => {
    if (obj[key] === null) {
      delete obj[key];
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      removeNullFields(obj[key] as Record<string, unknown>);
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  });

  return obj;
}

const options = [
  { value: 'klacz1', label: 'klacz1' },
  { value: 'klacz12', label: 'klacz12' },
  { value: 'klacz3', label: 'klacz3' },
];

export const EditForm = ({ onClose }: { onClose: () => void }) => {
  const data = useHorseContext();
  const { update, loading } = useMutationsUpdateHorse(data.name, data);
  const { name, birthday, sex, place, mother, father, id } = data;

  const defaultValue = {
    name: name,
    birthday: birthday ? new Date(birthday) : null,
    sex,
    place,
    mother: { value: mother?.name ?? null, label: mother?.name ?? null },
    father: { value: father?.name ?? null, label: father?.name ?? null },
  };

  type FormDataEntity = typeof defaultValue;

  const methods = useForm<FormDataEntity>({ defaultValues: defaultValue });

  const onSubmit: SubmitHandler<FormDataEntity> = async (data) => {
    try {
      await update({
        id,
        name: data.name,
        birthday: data.birthday,
        sex: data.sex,
        place: data.place,
        mother: returnNameofObject(data.mother),
        father: returnNameofObject(data.father),
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const filterColors = (inputValue: string) => {
    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string, callback: () => void) =>
    new Promise<IOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Flex flexDir={'column'} gap={2} align={'flex-end'}>
          {formFields.input.map((field) => {
            return (
              <>
                {field.name === 'birthday' ? (
                  <DatePickerInput key={field.name} name={field.name} label={field.label} />
                ) : (
                  <InputField name={field.name} placeholder={field.placeholder} label={field.label} />
                )}
              </>
            );
          })}
          <RadioInput name="sex" label="Change horse gender" radioValues={formFields.radio} />
          <Divider />

          <CreatableSelect
            name="mother"
            label={`Chosen another mother the ${name}`}
            control={methods.control}
            loadOptions={promiseOptions}
          />

          <CreatableSelect
            name="father"
            label={`Chosen another father the ${name}`}
            control={methods.control}
            loadOptions={promiseOptions}
          />

          <Flex>
            <ButtonGroup spacing="6">
              <CloseButton onClick={onClose} />
              <FormButton type="submit" isLoading={loading}>
                save
              </FormButton>
            </ButtonGroup>
          </Flex>
        </Flex>
      </form>
    </FormProvider>
  );
};
