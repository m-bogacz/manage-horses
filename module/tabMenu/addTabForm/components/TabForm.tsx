import React from 'react';
import { tabFormFields } from '../tabFormFields';
import { InputField } from '@/shared/inputs/InputField';
import { Flex, Grid, GridItem, Box } from '@chakra-ui/react';
import { FormFields } from '../../utils/types';
import { DatePickerInput } from '@/shared/inputs/datePickerInput/DatePickerInput';

export const TabForm = ({ formFields }: { formFields: FormFields }) => {
  return (
    <Box position={'relative'}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={2} mb={5} zIndex={2}>
        {formFields.map((field) => {
          const { label, name, placeholder, textarea = false } = field;

          return (
            <GridItem colSpan={2} key={name}>
              {name === 'date' ? (
                <DatePickerInput key={name} name={name} label={label} />
              ) : (
                <InputField name={name} placeholder={placeholder} label={label} asTextArea={textarea} />
              )}
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
