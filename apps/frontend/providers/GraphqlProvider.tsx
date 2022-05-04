import { Client as WSClient, createClient as createWSClient } from 'graphql-ws';
import React, { useEffect, useRef, useState } from 'react';
import {
  Client,
  createClient,
  defaultExchanges,
  Provider,
  subscriptionExchange,
} from 'urql';
import { useAuth } from './AuthProvider';
import { GraphQLProviderDTO } from './dto/graphql-provider.dto';

const createGQLClient = (url: string, currentUser: any) => {
  const subscriptionClient = createWSClient({
    url: url.replace('http://', 'ws://').replace('https://', 'wss://'),
    connectionParams: () => {
      const token = currentUser.accessToken;
      return {
        headers: token ? { authorization: `Bearer ${token}` } : undefined,
      };
    },
  });

  return {
    client: createClient({
      url,
      exchanges: [
        ...defaultExchanges,
        subscriptionExchange({
          forwardSubscription: (operation) => {
            return {
              subscribe: (sink) => ({
                unsubscribe: subscriptionClient.subscribe(operation, sink),
              }),
            };
          },
        }),
      ],
      fetchOptions: () => {
        const token = currentUser.accessToken;
        return {
          headers: token ? { authorization: `Bearer ${token}` } : undefined,
        };
      },
    }),
    _sub: subscriptionClient,
  };
};



export const GraphQLProvider = ({
  children,
  url,
}: GraphQLProviderDTO) => {
  const ref = useRef<{ client: Client; _sub: WSClient }>();
  const { client } = ref.current || ({} as any);
  const [, render] = useState({});
  const { currentUser } = useAuth();


  useEffect(() => {
    const r = createGQLClient(url, currentUser);
    ref.current = r;
    const { _sub } = r;
    render({});
    return () => {
      _sub?.dispose();
    };
  }, [currentUser, url]);

  if (!client) return null;

  return <Provider value={client}>{children}</Provider>;
};
