import { Profile } from '@/components/profile/Profile';
import { GetStaticPaths, GetStaticProps } from 'next';
import data from '@/json/data.json';
import { HorseEntity } from '@/utils/types';
import { TabMenu } from '@/components/tabMenu/TabMenu';
import { Flex } from '@chakra-ui/react';
import { getDefaultphoto } from '@/utils/imageLoader/getDefualtPhoto';
import { HorseProvider } from '@/apps/context/HorseContext';

interface HorsePageProps {
  horse: HorseEntity;
}

export default function Horse({ horse }: HorsePageProps) {
  return (
    <HorseProvider value={horse}>
      <Flex h={'100vh'} marginLeft={5}>
        <TabMenu />
        <Profile name={horse.name} src={getDefaultphoto(horse.images)} />
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
