import { AsyncControllerSelect } from '@/shared/asyncControllerSelect/AsyncControllerSelect';
import { Flex, Switch, Grid, GridItem, FormLabel, Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FAMILY_MEMBERS } from '../../utils/types';
import { OptionType } from '@/utils/types';
import { InputField } from '@/shared/inputs/InputField';

interface Props {
  familySide: 'father' | 'mother';
  placeholder?: string;
  familyMemberOptions: (inputValue: string, familyMember: FAMILY_MEMBERS) => Promise<OptionType[]>;
}
const GrandParentsFields = ({ familySide, placeholder, familyMemberOptions }: Props) => {
  const [grandParentsFromDataBase, setGrandParentsFromDataBase] = useState(false);

  const {
    control,
    resetField,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    resetField(`${familySide}GrandMother`);
    resetField(`${familySide}GrandFather`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grandParentsFromDataBase]);

  return (
    <>
      <Flex alignItems="center" gap="2">
        <Box mb={1}>
          <Text size="md">Choose grandparents from dataBase</Text>
        </Box>
        <Switch colorScheme="teal" onChange={(val) => setGrandParentsFromDataBase(val.target.checked)} />
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        <GridItem colSpan={1}>
          <FormLabel htmlFor={`${familySide}GrandFather`}>{'Add grandFather horse'}</FormLabel>
          {grandParentsFromDataBase ? (
            <AsyncControllerSelect
              control={control}
              name={`${familySide}GrandFather`}
              loadOptions={(val) => familyMemberOptions(val, 'grandFather')}
              placeholder={placeholder}
            />
          ) : (
            <InputField name={`${familySide}GrandFather`} />
          )}
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel htmlFor={`${familySide}GrandMother`}>{'Add grandMother horse'}</FormLabel>
          {grandParentsFromDataBase ? (
            <AsyncControllerSelect
              control={control}
              name={`${familySide}GrandMother`}
              loadOptions={(val) => familyMemberOptions(val, 'grandMother')}
              placeholder={placeholder}
            />
          ) : (
            <InputField name={`${familySide}GrandMother`} />
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default GrandParentsFields;
