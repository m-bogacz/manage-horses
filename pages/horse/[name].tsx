import { Profile } from '@/module/profile/Profile';
import { GetStaticPaths, GetStaticProps } from 'next';
import data from '@/json/data.json';
import { HorseEntity } from '@/utils/types';
import { TabMenu } from '@/module/tabMenu/TabMenu';
import { Box, Flex } from '@chakra-ui/react';
import { HorseProvider } from '@/apps/context/HorseContext';

interface HorsePageProps {
  horse: HorseEntity;
}

export default function Horse({ horse }: HorsePageProps) {
  return (
    <HorseProvider value={horse}>
      <Box display={{ base: 'block', lg: 'none' }}>AppBar</Box>
      <Flex h={'100vh'} w={'100%'} justifyContent="center">
        <TabMenu />
        <Flex display={{ base: 'none', md: 'flex' }}>
          <Profile />
        </Flex>
      </Flex>
    </HorseProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const names = data.horses.map((horse) => horse.name);

  const paths = names.map((name) => ({
    params: { name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const horse = data.horses.find((horse) => horse.name == params?.name);

  return {
    props: {
      horse,
    },
  };
};
