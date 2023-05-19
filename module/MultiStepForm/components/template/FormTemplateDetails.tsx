import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AsyncControllerSelect } from '@/shared/asyncControllerSelect/AsyncControllerSelect';
import { useAsyncControllerSelect } from '@/shared/asyncControllerSelect/useAsyncControllerSelect';
import { Divider, FormControl, FormErrorMessage, FormLabel, Grid, GridItem } from '@chakra-ui/react';
import { ParentSideInfo } from '../../utils/types';
import GrandParentsFields from './GrandParentsFields';

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
          <FormLabel htmlFor={familySide}>{`Add ${familySide} horse`}</FormLabel>
          <AsyncControllerSelect
            control={control}
            name={familySide}
            loadOptions={(val) => familyMemberOptions(val, 'parent')}
            placeholder={placeholder}
          />
          {errors[familySide] && <FormErrorMessage>{errors?.[familySide]?.message?.toString()}</FormErrorMessage>}
        </GridItem>
      </Grid>
      <Divider orientation="horizontal" margin={'30px 30px 30px 0'} alignSelf={'center'} />
      <GrandParentsFields familySide={familySide} familyMemberOptions={familyMemberOptions} />
    </FormControl>
  );
};
