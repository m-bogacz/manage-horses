import { useHorseContext } from '@/apps/context/HorseContext';
import { dateHelper } from '@/lib/dateHelper';
import { Box, Center, Text, Image, VStack, Flex } from '@chakra-ui/react';
import { ManageHorseAction } from './components/manageHorseAction/ManageHorseAction';
import { Feature } from './components/feature/Feature';
import { FeatureParent } from './components/feature/FeatureParent';

export const Profile = () => {
  const { defaultPhotoSrc, name, birthday, sex, place, profileImageUrl, motherName, fatherName, mother, father } =
    useHorseContext();

  return (
    <Flex w={'100%'} flexDir={'column'} bg="table.100" borderRadius={16} m={{ base: 0, md: 10 }}>
      <Box flex={1}>
        <Center padding={10} paddingBottom={2}>
          <Image
            boxSize="200px"
            src={profileImageUrl ? profileImageUrl : defaultPhotoSrc}
            alt={`profile image of ${name}`}
            borderRadius="full"
            objectFit="cover"
          />
        </Center>

        <Center>
          <Text fontSize="xx-large">{name}</Text>
        </Center>

        <VStack spacing={0} ml={2} alignItems={'flex-start'}>
          <Feature title="Birthday" desc={birthday ? dateHelper(birthday).format('DD/MM/YYYY') : ''} />
          <Feature title="Sex" desc={sex} />
          <Feature title="Place" desc={place} />
          <FeatureParent title="Mother" desc={motherName} parent={mother} />
          <FeatureParent title="Father" desc={fatherName} parent={father} />
        </VStack>
      </Box>
      <ManageHorseAction />
    </Flex>
  );
};
