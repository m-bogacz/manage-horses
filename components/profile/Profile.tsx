import { Flex, Box, Center, Text, Image } from '@chakra-ui/react';

export const Profile = ({ name, src }: { name: string; src: string }) => {
  return (
    <Flex flexGrow={4} minWidth={400}>
      <Box w={'100%'} margin={10} bg="table.100">
        <Center padding={10} paddingBottom={2}>
          <Image boxSize="200px" src={src} alt={`profile image of ${name}`} borderRadius="full" objectFit="cover" />
        </Center>

        <Center>
          <Text fontSize="xx-large">{name}</Text>
        </Center>
      </Box>
    </Flex>
  );
};
