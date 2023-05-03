import React from 'react';
import { tabFormFields } from '../tabFormFields';
import { InputField } from '@/shared/inputs/InputField';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { FormFields } from '../../utils/types';

export const TabForm = ({ formFields }: { formFields: FormFields }) => {
  return (
    <Flex flexDir={'column'}>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={5} mb={5}>
        {formFields.map((field) => {
          return (
            <GridItem colSpan={2} key={field.name}>
              <InputField name={field.name} placeholder={field.placeholder} label={field.label} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};
