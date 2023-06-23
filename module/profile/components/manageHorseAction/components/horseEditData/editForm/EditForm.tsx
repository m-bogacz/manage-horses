import React from 'react';
import { InputField } from '@/shared/inputs/InputField';
import { RadioInput } from '@/shared/inputs/RadioInput';
import { DatePickerInput } from '@/shared/inputs/datePickerInput/DatePickerInput';
import { ButtonGroup, Divider, Flex } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { formFields } from './utils/helpers';
import { useHorseContext } from '@/apps/context/HorseContext';
import { FormButton } from '@/shared/button/FormButton';
import { CloseButton } from '@/shared/button/CloseButton';
import { useMutationsUpdateHorse } from '../hooks/useMutationsUpdateHorse';
import { returnNameofObject } from '@/module/addHorseForm/components/form/utils/helpers';
import { EditCreateableSelect } from './components/editCreateableSelect/EditCreateableSelect';

export const EditForm = ({ onClose }: { onClose: () => void }) => {
  const data = useHorseContext();
  const { update, loading } = useMutationsUpdateHorse(data.name, data);
  const { name, birthday, gender, place, mother, father, id } = data;

  const defaultValue = {
    name: name,
    birthday: birthday ? new Date(birthday) : null,
    gender: gender,
    place,
    mother: { value: mother?.name ?? null, label: mother?.name ?? null },
    father: { value: father?.name ?? null, label: father?.name ?? null },
  };

  type EditFormDataEntity = typeof defaultValue;

  const methods = useForm<EditFormDataEntity>({ defaultValues: defaultValue });

  const onSubmit: SubmitHandler<EditFormDataEntity> = async (data) => {
    try {
      await update({
        id,
        name: data.name,
        birthday: data.birthday,
        gender: data.gender,
        place: data.place,
        mother: returnNameofObject(data.mother),
        father: returnNameofObject(data.father),
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

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
          <RadioInput name="gender" label="Change horse gender" radioValues={formFields.radio} />

          <Divider />

          <EditCreateableSelect
            name="mother"
            label={`Chosen another mother the ${name}`}
            control={methods.control}
            gender="mare"
          />
          <EditCreateableSelect
            name="father"
            label={`Chosen another father the ${name}`}
            control={methods.control}
            gender="stallion"
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
