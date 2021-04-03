import {ApolloLink} from '@apollo/client';
import {errorLink} from './error';
import serverLink from './server';

const link: ApolloLink = ApolloLink.from([errorLink, serverLink]);

export default link;
