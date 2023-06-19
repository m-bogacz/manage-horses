import { Profile } from '@/module/profile/Profile';
import { GetStaticPaths, GetStaticProps } from 'next';
import { HorseData, HorseDataContext } from '@/utils/types';
import { TabMenu } from '@/module/tabMenu/TabMenu';
import { Flex } from '@chakra-ui/react';
import { HorseProvider } from '@/apps/context/HorseContext';
import { prisma } from '@/lib/prisma';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  name: string;
}

interface HorsePageProps {
  horse: HorseData;
}

export default function Horse({ horse }: HorsePageProps) {
  const updateHorse = {
    ...horse,
    news: { type: 'news', news: horse.news },
    veterinarian: { type: 'veterinarian', veterinarian: horse.veterinarian },
    farrier: { type: 'farrier', farrier: horse.farrier },
    mother: {} as HorseDataContext,
    father: {} as HorseDataContext,
  } satisfies HorseDataContext;

  return (
    <HorseProvider value={updateHorse}>
      <Flex h={'100vh'} justifyContent="center">
        <TabMenu />
        <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 4, lg: 2 }}>
          <Profile />
        </Flex>
      </Flex>
    </HorseProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const horses = await prisma.horse.findMany({
    select: { name: true },
  });

  return {
    paths: horses.map((horse) => ({
      params: { name: horse.name },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<HorsePageProps, Params> = async ({ params }) => {
  const horseName = params?.name;
  const horse = await prisma.horse.findUnique({
    where: { name: horseName },
    include: {
      news: true,
      veterinarian: true,
      farrier: true,
      mother: true,
      father: true,
    },
  });

  if (horse) {
    return {
      props: {
        horse: JSON.parse(JSON.stringify(horse)),
      },
    };
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
