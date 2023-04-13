import { FlexProps, Avatar, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

interface SideBarItemProps extends FlexProps {
  name: string;
  src: string;
}

export const SideBarItem = ({ name, src }: SideBarItemProps) => {
  const router = useRouter();
  return (
    <ListItem
      display={'flex'}
      alignItems="center"
      p="2"
      mx="4"
      gap={3}
      listStyleType="none"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      onClick={() => router.push(`/horse/${name}`)}
    >
      <Avatar name={name} src={src} />
      {name}
    </ListItem>
  );
};
