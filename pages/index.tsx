import Head from 'next/head';
import { HorsePageLayout } from './horse';

export default function Home() {
  return (
    <>
      <Head>
        <title>Horses Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Home.getLayout = HorsePageLayout;
