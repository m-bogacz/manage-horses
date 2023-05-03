import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '@/module/layout/Layout';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { theme } from '@/styles/customTheme';
import '../shared/inputs/datePickerInput/datapicker.css';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools />
        <ChakraProvider theme={theme} resetCSS={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
