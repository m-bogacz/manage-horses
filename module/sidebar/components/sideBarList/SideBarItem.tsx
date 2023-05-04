import { FlexProps, Avatar, ListItem, Text } from '@chakra-ui/react';
import { ChakraNextLink } from '@/shared/chakraNextLink/ChakraNextLink';

interface SideBarItemProps extends FlexProps {
  name: string;
  src: string;
}

export const SideBarItem = ({ name, src }: SideBarItemProps) => {
  return (
    <ListItem
      mt={2}
      p={1}
      mx="4"
      gap={3}
      listStyleType="none"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
      }}
    >
      <ChakraNextLink
        href={`/horse/${name}`}
        p={1}
        display={'flex'}
        alignItems="center"
        gap={3}
        listStyleType="none"
        textDecoration="none"
        _focus={{
          boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
          outline: 'none',
        }}
      >
        <Avatar name={name} src={src} />
        <Text>{name}</Text>
      </ChakraNextLink>
    </ListItem>
  );
};
