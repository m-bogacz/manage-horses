import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AsyncControllerSelect } from '@/shared/asyncControllerSelect/AsyncControllerSelect';
import { useAsyncControllerSelect } from '@/shared/asyncControllerSelect/useAsyncControllerSelect';
import { FormControl, FormLabel, Grid, GridItem } from '@chakra-ui/react';
import { OptionType } from '@/shared/asyncControllerSelect/types';

interface FormTemplateDetailsProps {
  name: string;
  options: OptionType[];
  placeholder?: string;
  label?: string;
}

export const FormTemplateDetails = ({ name, options, placeholder, label }: FormTemplateDetailsProps) => {
  const { promiseOptions } = useAsyncControllerSelect(options);
  const { control } = useFormContext();

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem colSpan={1}>
        <FormControl isRequired>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <AsyncControllerSelect control={control} name={name} loadOptions={promiseOptions} placeholder={placeholder} />
        </FormControl>
      </GridItem>
    </Grid>
  );
};
