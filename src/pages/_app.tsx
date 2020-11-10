import type { AppProps } from 'next/app';
import { useMemo, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MainLayout from '@/components/Layouts/MainLayout';
import { Dark, Light } from '@/ui/Themes';

import '@/styles/global.scss';
import 'fontsource-roboto';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => (prefersDarkMode ? Dark : Light), [
    prefersDarkMode,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
