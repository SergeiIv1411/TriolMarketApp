/**
 *  @flow
 * 
 */
import { ApolloClient, InMemoryCache } from '@apollo/client';


export const apolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:5000/graphql',
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
    },
  });

