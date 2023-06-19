import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useAsyncControllerSelect } from '@/shared/asyncControllerSelect/useAsyncControllerSelect';
import { FormControl, Grid, GridItem } from '@chakra-ui/react';
import { ParentSideInfo } from '../../utils/types';
import ParentField from './ParentsField';

interface FormTemplateDetailsProps {
  familySide: 'father' | 'mother';
  options: ParentSideInfo;
  placeholder?: string;
}

export const FormTemplateDetails = ({ familySide, options, placeholder }: FormTemplateDetailsProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { familyMemberOptions } = useAsyncControllerSelect(options);
  console.log(errors);
  return (
    <FormControl isInvalid={Boolean(errors[familySide])}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <ParentField familySide={familySide} familyMemberOptions={familyMemberOptions} placeholder={placeholder} />
        </GridItem>
      </Grid>
    </FormControl>
  );
};
