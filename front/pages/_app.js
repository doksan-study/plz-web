import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme/theme';
import createEmotionCache from '../src/createEmotionCache';
import FullLayout from '../src/layouts/FullLayout';
import '../styles/style.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <QueryClientProvider client={qeuryClient}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>Please Web</title>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FullLayout>
              <Component {...pageProps} />
            </FullLayout>
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
