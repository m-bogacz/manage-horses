import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AsyncControllerSelect } from '@/shared/asyncControllerSelect/AsyncControllerSelect';
import { useAsyncControllerSelect } from '@/shared/asyncControllerSelect/useAsyncControllerSelect';
import { FormControl, FormErrorMessage, FormLabel, Grid, GridItem } from '@chakra-ui/react';
import { OptionType } from '@/utils/types';

interface FormTemplateDetailsProps {
  name: string;
  options: OptionType[];
  placeholder?: string;
  label?: string;
}

export const FormTemplateDetails = ({ name, options, placeholder, label }: FormTemplateDetailsProps) => {
  const { control, formState, register } = useFormContext();
  const { promiseOptions } = useAsyncControllerSelect(options);
  const errors = formState.errors;

  // const errors = formState.errors;
  console.log(formState);
  console.log(errors);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <FormControl isInvalid={Boolean(errors[name])}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <AsyncControllerSelect control={control} name={name} loadOptions={promiseOptions} placeholder={placeholder} />
          {errors[name] && <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>}
        </FormControl>
      </GridItem>
    </Grid>
  );
};
