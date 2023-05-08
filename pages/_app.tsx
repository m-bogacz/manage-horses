import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '@/module/layout/Layout';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { theme } from '@/styles/customTheme';
import '../shared/inputs/datePickerInput/datapicker.css';
import { Global } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools />
        <ChakraProvider theme={theme} resetCSS={true}>
          {/* //@todo */}
          <Global
            styles={`
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: #F7F7F7;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #A0A0A0;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #707070;
    }
  `}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
