import { Profile } from '@/module/profile/Profile';
import { GetStaticPaths, GetStaticProps } from 'next';
import { HorseData } from '@/utils/types';
import { TabMenu } from '@/module/tabMenu/TabMenu';
import { Flex } from '@chakra-ui/react';
import { HorseProvider } from '@/apps/context/horseContext/HorseContext';
import { prisma } from '@/lib/prisma';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from '@tanstack/react-query';
import { getHorse } from '@/apps/api/modules/horse/horse.services';
import { HorsePageLayout } from '.';

interface Params extends ParsedUrlQuery {
  name: string;
}

interface HorsePageProps {
  horse: HorseData;
}

export default function Horse({ horse }: HorsePageProps) {
  const { data } = useQuery(['horse', horse.name], () => getHorse(horse.name), { initialData: horse });

  return (
    <HorseProvider value={data}>
      <Flex justifyContent="center">
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

export const getStaticProps: GetStaticProps<Partial<HorsePageProps>, Params> = async ({ params }) => {
  const horseName = params?.name;

  const horse = await prisma.horse.findUnique({
    where: { name: horseName },
    include: {
      news: {
        include: {
          tabs: true,
        },
      },
      veterinarian: {
        include: {
          tabs: true,
        },
      },
      farrier: {
        include: {
          tabs: true,
        },
      },
      mother: true,
      father: true,
    },
  });

  return {
    props: {
      horse: JSON.parse(JSON.stringify(horse)),
    },
  };
};

Horse.getLayout = HorsePageLayout;
