import { Profile } from '@/components/profile/Profile';
import { GetStaticPaths, GetStaticProps } from 'next';
import data from '@/json/data.json';
import { HorseEntity } from '@/utils/types';

interface HorsePageProps {
  horse: HorseEntity;
}

export default function Horse({ horse }: HorsePageProps) {
  return <Profile name={horse.name} />;
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
