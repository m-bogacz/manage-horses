import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { AppProviders } from '@/providers/AppProviders';
import '../shared/inputs/datePickerInput/datapicker.css';
import '../styles/globals.css';
import { AppPropsWithLayout } from '@/utils/types';
import { RootLayout } from '@/module/layout/RootLayout';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionProvider session={session}>
      <AppProviders>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </AppProviders>
    </SessionProvider>
  );
}
