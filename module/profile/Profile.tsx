import { useHorseContext } from '@/apps/context/HorseContext';
import { dateHelper } from '@/lib/dateHelper';
import { Box, Center, Text, Image, VStack, HStack, Flex } from '@chakra-ui/react';
import { ManageHorseAction } from './components/manageHorseAction/ManageHorseAction';
import { Feature, FeatureLink } from './components/feature/Feature';

export const Profile = () => {
  const { defaultPhotoSrc, name, birthday, sex, place, profileImageUrl, motherName, fatherName } = useHorseContext();

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
          <FeatureLink title="Mother" desc={motherName} />
          <FeatureLink title="Father" desc={fatherName} />
        </VStack>
      </Box>
      <ManageHorseAction />
    </Flex>
  );
};
