import React from 'react';
import { Flex, GridItem, Grid } from '@chakra-ui/react';
import { ImageUploader } from './components/imageUploader/ImageUploader';
import { InputField } from '@/shared/inputs/InputField';
import { formFields } from './formFields';
import { RadioInput } from '@/shared/inputs/RadioInput';

export const HorseInformation = () => {
  return (
    <Flex flexDir={'column'}>
      <ImageUploader name="profileImage" />
      <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={5} mb={5}>
        {formFields.input.map((field) => {
          return (
            <GridItem colSpan={2} key={field.name}>
              <InputField name={field.name} placeholder={field.placeholder} />
            </GridItem>
          );
        })}
      </Grid>
      <RadioInput name="sex" radioValues={formFields.radio} />
    </Flex>
  );
};