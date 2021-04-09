import {AppProps} from 'next/app';
import Head from 'next/head';
import {ApolloProvider} from '@apollo/client';
import {CssBaseline} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import NProgress from 'nprogress';
import {Router, useRouter} from 'next/dist/client/router';

import {createApolloClient} from 'apollo';
import {theme} from 'styles';
import 'styles/nprogress.css';

export default function App({Component, pageProps}: AppProps) {
  const apolloClient = createApolloClient();
  const router = useRouter();

  NProgress.configure({showSpinner: false});
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <title>
          Countries {router.query.name ? ` - ${router.query.name}` : ''}{' '}
        </title>
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
