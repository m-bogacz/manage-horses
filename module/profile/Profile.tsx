import { useHorseContext } from '@/apps/context/HorseContext';
import { Flex, Box, Center, Text, Image, VStack, HStack } from '@chakra-ui/react';

export const Profile = () => {
  const { defaultPhotoSrc, name, birthday, sex, place, profileImageUrl } = useHorseContext();

  return (
    <Flex minWidth={{ md: 300, lg: 400 }} m={{ base: 0, md: 10 }}>
      <Box w={'100%'} bg="table.100" borderRadius={16}>
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
          <Feature title="Name" desc={name} />
          <Feature title="Birthday" desc={birthday} />
          <Feature title="Sex" desc={sex} />
          <Feature title="Place" desc={place} />
        </VStack>
      </Box>
    </Flex>
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
