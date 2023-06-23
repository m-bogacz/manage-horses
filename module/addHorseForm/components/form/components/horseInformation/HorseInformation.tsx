import React from 'react';
import { Flex, GridItem, Grid } from '@chakra-ui/react';
import { ImageUploader } from './components/imageUploader/ImageUploader';
import { InputField } from '@/shared/inputs/InputField';
import { RadioInput } from '@/shared/inputs/RadioInput';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerInput } from '@/shared/inputs/datePickerInput/DatePickerInput';
import { formFields } from '../../utils/helpers';

export const HorseInformation = () => {
  return (
    <Flex flexDir={'column'}>
      <ImageUploader name="profileImage" />
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={5} mb={5} zIndex={1}>
        {formFields.input.map((field) => {
          return (
            <GridItem colSpan={2} key={field.name}>
              {field.name === 'birthday' ? (
                <DatePickerInput key={field.name} name={field.name} />
              ) : (
                <InputField name={field.name} placeholder={field.placeholder} />
              )}
            </GridItem>
          );
        })}
      </Grid>

      <RadioInput name="gender" radioValues={formFields.radio} />
    </Flex>
  );
};
