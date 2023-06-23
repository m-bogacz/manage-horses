import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormControl, Grid, GridItem } from '@chakra-ui/react';
import { GenderType } from '@/utils/types';
import { AyncCreateableSelect } from '@/shared/ayncCreateableSelect/AyncCreateableSelect';

interface FormTemplateDetailsProps {
  familySide: 'father' | 'mother';
  placeholder?: string;
  gender: GenderType;
  label: string;
}

export const FormTemplateDetails = ({ familySide, gender, label, placeholder }: FormTemplateDetailsProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={Boolean(errors[familySide])}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <AyncCreateableSelect
            control={control}
            gender={gender}
            name={familySide}
            label={label}
            placeholder={placeholder}
          />
        </GridItem>
      </Grid>
    </FormControl>
  );
};
