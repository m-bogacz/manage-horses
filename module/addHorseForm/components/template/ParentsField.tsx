import { AsyncControllerSelect } from '@/shared/asyncControllerSelect/AsyncControllerSelect';
import { Box, Flex, FormErrorMessage, FormLabel, Switch, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FAMILY_MEMBERS } from '../../utils/types';
import { OptionType } from '@/utils/types';
import { InputField } from '@/shared/inputs/InputField';

interface Props {
  familySide: string;
  familyMemberOptions: (inputValue: string, familyMember: FAMILY_MEMBERS) => Promise<OptionType[]>;
  placeholder?: string;
}
const ParentField = ({ familySide, placeholder, familyMemberOptions }: Props) => {
  const [chooseFromExistingHorses, setChooseFromExistingHorses] = useState(false);

  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue(familySide, chooseFromExistingHorses ? { value: '', label: '' } : '');
  }, [chooseFromExistingHorses, familySide, setValue]);

  return (
    <>
      <Flex alignItems="center" gap="2">
        <Box mb={1}>
          <Text size="md">{`Choose ${familySide} from existing horses`}</Text>
        </Box>
        <Switch colorScheme="teal" onChange={(val) => setChooseFromExistingHorses(val.target.checked)} />
      </Flex>
      <FormLabel htmlFor={familySide}>{`Add ${familySide} horse`}</FormLabel>
      {chooseFromExistingHorses ? (
        <>
          <AsyncControllerSelect
            control={control}
            name={familySide}
            loadOptions={(val) => familyMemberOptions(val, 'parent')}
            placeholder={placeholder}
          />
          {errors[familySide] && <FormErrorMessage>{errors?.[familySide]?.message?.toString()}</FormErrorMessage>}
        </>
      ) : (
        <InputField name={familySide} />
      )}
    </>
  );
};

export default ParentField;
