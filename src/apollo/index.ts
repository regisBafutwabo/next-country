import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
} from '@apollo/client';
import link from './middlewares';

let _client: ApolloClient<NormalizedCacheObject> | undefined;

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  if (_client) return _client;

  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: link,
    cache: new InMemoryCache(),
  });

  _client = client;

  return client;
}
