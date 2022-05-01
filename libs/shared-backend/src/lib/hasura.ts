import { getSdk } from '@next-auth/codegen-sdk';
import { GraphQLClient } from 'graphql-request';
import { HasuraService } from './hasura-service';

export const createHasura = () => {
  const config = {
    hasuraEndPoint: process.env.HASURA_GRAPHQL_ENDPOINT as string,
    hasuraAdminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
  };

  const gqlEndPoint = `${config.hasuraEndPoint}/v1/graphql`;

  const client = new GraphQLClient(gqlEndPoint, {
    headers: { 'x-hasura-admin-secret': config.hasuraAdminSecret },
  });

  const sdk = getSdk(client);

  const hasura = new HasuraService(config.hasuraEndPoint, {
    headers: {
      'x-hasura-admin-secret': config.hasuraAdminSecret,
    },
  });

  return {
    sdk: {
      ...sdk,
    },
    hasura,
  };
};

export type createHasuraReturn = ReturnType<typeof createHasura>;
