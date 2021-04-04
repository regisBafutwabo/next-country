import {AppProps} from 'next/app';
import Head from 'next/head';
import {ApolloProvider} from '@apollo/client';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';

import {createApolloClient} from 'apollo';
import {theme} from 'styles';

export default function App({Component, pageProps}: AppProps) {
  const apolloClient = createApolloClient();

  return (
    <>
      <Head>
        <title> Countries </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
