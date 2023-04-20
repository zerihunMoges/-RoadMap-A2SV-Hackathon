import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AuthContextProvider } from '../context/AuthContext'
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
// import '../styles/globals.css';
import Header from '../components/header'
import Footer from '../components/footer'

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <AuthContextProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />   
        </ThemeProvider>
      </CacheProvider>
     </AuthContextProvider>
  );
};

export default MyApp;