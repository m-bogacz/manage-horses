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

interface IOption {
  value: string;
  label: string;
}

const options = [
  { value: 'klacz1', label: 'klacz1' },
  { value: 'klacz12', label: 'klacz12' },
  { value: 'klacz3', label: 'klacz3' },
];

export const EditForm = ({ onClose }: { onClose: () => void }) => {
  const { name, birthday, sex, place, motherName, fatherName } = useHorseContext();

  const defaultValue = {
    name: name,
    birthday: new Date(birthday),
    sex,
    place,
    mother: { value: motherName, label: motherName },
    father: { value: fatherName, label: fatherName },
  };

  type FormDataEntity = typeof defaultValue;

  const methods = useForm<FormDataEntity>({ defaultValues: defaultValue });

  const onSubmit: SubmitHandler<FormDataEntity> = async (data) => {
    console.log(data);
  };

  const filterColors = (inputValue: string) => {
    return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<IOption[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  const createOption = (label: string) => ({
    label,
    value: label,
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
            handleCreate={createOption}
          />

          <CreatableSelect
            name="father"
            label={`Chosen another father the ${name}`}
            control={methods.control}
            loadOptions={promiseOptions}
            handleCreate={createOption}
          />

          <Flex>
            <ButtonGroup spacing="6">
              <CloseButton onClick={onClose} />
              <FormButton type="submit">save</FormButton>
            </ButtonGroup>
          </Flex>
        </Flex>
      </form>
    </FormProvider>
  );
};
