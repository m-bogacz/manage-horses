import { Flex, HStack, IconButton, Menu } from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';
import { UserMenuList } from './components/userMenuList/UserMenuList';
import { UserInfo } from './components/userInfo/UserInfo';

export const UserBar = () => {
  return (
    <HStack mr={10}>
      <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<BellIcon />} />
      <Flex alignItems={'center'}>
        <Menu>
          {({ isOpen }) => (
            <>
              <UserInfo isOpen={isOpen} />
              <UserMenuList />
            </>
          )}
        </Menu>
      </Flex>
    </HStack>
  );
};
