import { extendTheme } from '@chakra-ui/react';

import { Genos } from 'next/font/google';

const genos = Genos({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        overflow: 'hidden',
      },
    }),
  },

  colors: {
    table: {
      100: '#edf2f7',
    },
  },
  fonts: {
    body: genos.style.fontFamily,
  },
});
