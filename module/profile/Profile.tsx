import { useHorseContext } from '@/apps/context/horseContext/HorseContext';
import { dateHelper } from '@/lib/dateHelper';
import { Box, Center, Text, Image, VStack, Flex } from '@chakra-ui/react';
import { ManageHorseAction } from './components/manageHorseAction/ManageHorseAction';
import { Feature } from './components/feature/Feature';
import { FeatureParent } from './components/feature/FeatureParent';
import { getDefaultExamplephoto } from '@/utils/imageLoader/getDefualtPhoto';

export const Profile = () => {
  const { name, birthday, gender, place, profileImageUrl, mother, father } = useHorseContext();

  return (
    <Flex w={'100%'} flexDir={'column'} bg="table.100" borderRadius={16} m={{ base: 0, md: 10 }}>
      <Box flex={1}>
        <Center padding={10} paddingBottom={2}>
          <Image
            boxSize="200px"
            src={profileImageUrl ? profileImageUrl : getDefaultExamplephoto()}
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
          <Feature title="Gender" desc={gender} />
          <Feature title="Place" desc={place} />
          <FeatureParent title="Mother" parent={mother} />
          <FeatureParent title="Father" parent={father} />
        </VStack>
      </Box>
      <ManageHorseAction />
    </Flex>
  );
};
