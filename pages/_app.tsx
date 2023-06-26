import type { AppProps } from 'next/app';
import { Layout } from '@/module/layout/Layout';
import { SessionProvider } from 'next-auth/react';
import { AppProviders } from '@/providers/AppProviders';
import '../shared/inputs/datePickerInput/datapicker.css';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AppProviders>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </AppProviders>
  );
}
