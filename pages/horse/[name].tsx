import { Profile } from '@/module/profile/Profile';
import { GetStaticPaths, GetStaticProps } from 'next';
import { HorseEntity } from '@/utils/types';
import { TabMenu } from '@/module/tabMenu/TabMenu';
import { Flex } from '@chakra-ui/react';
import { HorseProvider } from '@/apps/context/HorseContext';
import { prisma } from '@/lib/prisma';
import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  name: string;
}

interface HorsePageProps {
  horse: HorseEntity;
}

export default function Horse({ horse }: HorsePageProps) {
  return (
    <HorseProvider value={horse}>
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
    fallback: true,
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
