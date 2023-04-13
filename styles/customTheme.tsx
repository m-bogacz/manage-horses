import { extendTheme } from '@chakra-ui/react';

import { Genos } from 'next/font/google';

const genos = Genos({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const theme = extendTheme({
  components: {
    Divider: {
      defaultProps: { size: 'md' },
      sizes: {
        lg: { borderWidth: '4px' },
        md: { borderWidth: '2px' },
        sm: { borderWidth: '1px' },
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        // overflow: 'hidden',
      },
    }),
  },

  colors: {
    table: {
      100: '#edf2f7',
    },
    step: {
      100: '#E2E8F0',
      200: '#7A889D',
      active: '#0F8388',
      activeText: 'rgba(15, 131, 136, 0.2)',
    },
    button: {
      100: '#2D3434',
    },
    checkIcon: {
      100: '#0F8378',
    },
  },
  fonts: {
    body: genos.style.fontFamily,
  },
});
