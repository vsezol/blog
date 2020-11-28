import type { AppProps } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import useSSRStyles from '@/modules/hooks/useSSRStyles';

import MainLayout from '@/components/layout/MainLayout.tsx';
import SwitchThemeProvider from '@/components/hoc/ThemeProvider/SwitchThemeProvider';

import '@/styles/global.scss';
import 'fontsource-roboto';

function MyApp({ Component, pageProps }: AppProps) {
  useSSRStyles();

  return (
    <SwitchThemeProvider>
      <MainLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </MainLayout>
    </SwitchThemeProvider>
  );
}

export default MyApp;
