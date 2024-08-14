import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#115D8C',
          orange: '#F25D27'
        },
        text: {
          primary: '#123952',
          secondary: '#61747F',
          tertiary: '#A0AEC2'
        },
        shape: {
          primary: '#FFF',
          secondary: '#DCE2E5'
        },
        others: {
          delete: '#DE3838',
          success: '#51B853',
          successLight: '#DCF5DD',
          blueLigth: '#DDE9F0',
          orangeLight: '#FFA585',
          yellow: '#EFB866'
        },
        background: '#F5F8FA'
      }
    }
  },
  plugins: []
};
export default config;
