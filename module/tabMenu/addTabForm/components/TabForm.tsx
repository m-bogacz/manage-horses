import React from 'react';
import { tabFormFields } from '../tabFormFields';
import { InputField } from '@/shared/inputs/InputField';
import { Flex, Grid, GridItem, Box } from '@chakra-ui/react';
import { FormFields } from '../../utils/types';
import { DatePickerInput } from '@/shared/inputs/datePickerInput/DatePickerInput';

export const TabForm = ({ formFields }: { formFields: FormFields }) => {
  return (
    <Box position={'relative'}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={5} mb={5} zIndex={2}>
        {formFields.map((field) => {
          return (
            <GridItem colSpan={2} key={field.name}>
              {field.name === 'date' ? (
                <DatePickerInput key={field.name} name={field.name} label={field.label} />
              ) : (
                <InputField name={field.name} placeholder={field.placeholder} label={field.label} />
              )}
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
