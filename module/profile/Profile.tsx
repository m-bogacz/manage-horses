import { useHorseContext } from '@/apps/context/HorseContext';
import { dateHelper } from '@/lib/dateHelper';
import { Box, Center, Text, Image, VStack, HStack } from '@chakra-ui/react';

export const Profile = () => {
  const { defaultPhotoSrc, name, birthday, sex, place, profileImageUrl, mother, father } = useHorseContext();

  return (
    <Box w={'100%'} bg="table.100" borderRadius={16} m={{ base: 0, md: 10 }}>
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

      <VStack spacing={0} ml={2} align={'stretch'}>
        <Feature title="Birthday" desc={dateHelper(birthday).format('DD/MM/YYYY')} />
        <Feature title="Sex" desc={sex} />
        <Feature title="Place" desc={place} />
        <Feature title="Mother" desc={mother} />
        <Feature title="Father" desc={father} />
      </VStack>
    </Box>
  );
};

function Feature({ title, desc, ...rest }: any) {
  return (
    <HStack p={1} alignItems="center">
      <Text fontSize="2xl" mr={1}>
        {title}:
      </Text>
      <Text fontSize="2xl" fontWeight={'medium'}>
        {desc}
      </Text>
    </HStack>
  );
}
