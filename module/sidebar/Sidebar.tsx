import { Flex, Divider, Button, Box } from '@chakra-ui/react';
import { useHorses } from '@/hooks/useHorse/useHorses';
import { AppBar } from '../appBar/AppBar';
import { SideBarList } from './components/sideBarList/SideBarList';
import { useRouter } from 'next/navigation';
import { PlusSquareIcon } from '@chakra-ui/icons';

interface SideBarProps {
  maxW?: number | string;
  onCloseDrawer?: () => void;
}

export const Sidebar = ({ maxW = 240, onCloseDrawer }: SideBarProps) => {
  const router = useRouter();
  const { isLoading, error, data } = useHorses();

  if (!data) return null;

  const handleOpenAddHorseForm = () => {
    router.push('/add');
  };

  return (
    <Flex
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.200"
      gap={3}
      h="100vh"
      backgroundColor={{ base: 'white', md: 'white' }}
      flexDir={'column'}
      minW={240}
      w={'100vw'}
      maxW={{ base: '100vw', md: maxW }}
    >
      <Box flex={1}>
        <AppBar />
      </Box>
      <Divider />

      <Box flex={9}>
        <SideBarList horses={data.horses} />
      </Box>

      <Button leftIcon={<PlusSquareIcon />} variant="solid" m={6} onClick={handleOpenAddHorseForm}>
        Add horse
      </Button>
    </Flex>
  );
};
