import React from 'react';
import { useFormContext } from 'react-hook-form';
import { AsyncControllerSelect } from '@/shared/asyncControllerSelect/AsyncControllerSelect';
import { useAsyncControllerSelect } from '@/shared/asyncControllerSelect/useAsyncControllerSelect';
import { FormControl, FormErrorMessage, FormLabel, Grid, GridItem } from '@chakra-ui/react';
import { ParentSideInfo } from '../../utils/types';

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
      <Grid templateColumns="repeat(2, 1fr)" gap={5} marginTop={8}>
        <GridItem colSpan={1}>
          <FormLabel htmlFor={`${familySide}GrandFather`}>{'Add grandFather horse'}</FormLabel>
          <AsyncControllerSelect
            control={control}
            name={`${familySide}GrandFather`}
            loadOptions={(val) => familyMemberOptions(val, 'grandFather')}
            placeholder={placeholder}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel htmlFor={`${familySide}GrandMother`}>{'Add grandMother horse'}</FormLabel>
          <AsyncControllerSelect
            control={control}
            name={`${familySide}GrandMother`}
            loadOptions={(val) => familyMemberOptions(val, 'grandMother')}
            placeholder={placeholder}
          />
        </GridItem>
      </Grid>
    </FormControl>
  );
};
