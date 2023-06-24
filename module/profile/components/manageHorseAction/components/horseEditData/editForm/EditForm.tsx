import React from 'react';
import { InputField } from '@/shared/inputs/InputField';
import { RadioInput } from '@/shared/inputs/RadioInput';
import { DatePickerInput } from '@/shared/inputs/datePickerInput/DatePickerInput';
import { ButtonGroup, Divider, Flex } from '@chakra-ui/react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { formFields, getDefaultValuesEditForm } from './utils/helpers';
import { useHorseContext } from '@/apps/context/horseContext/HorseContext';
import { FormButton } from '@/shared/button/FormButton';
import { CloseButton } from '@/shared/button/CloseButton';
import { useMutationsUpdateHorse } from '../hooks/useMutationsUpdateHorse';
import { returnNameofObject } from '@/module/addHorseForm/components/form/utils/helpers';
import { AyncCreateableSelect } from '@/shared/ayncCreateableSelect/AyncCreateableSelect';
import { DefaultValuesEditFormEntity } from './utils/types';

export const EditForm = ({ onClose }: { onClose: () => void }) => {
  const contextData = useHorseContext();
  const { update, loading } = useMutationsUpdateHorse();

  const editFromDefaultValues = getDefaultValuesEditForm(contextData);

  const methods = useForm<DefaultValuesEditFormEntity>({ defaultValues: editFromDefaultValues });

  const onSubmit: SubmitHandler<DefaultValuesEditFormEntity> = async (data) => {
    try {
      await update({
        ...data,
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

          <AyncCreateableSelect
            name="mother"
            label={`Chosen another mother the ${name}`}
            control={methods.control}
            gender="mare"
          />
          <AyncCreateableSelect
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
