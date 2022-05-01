import * as Types from '@next-auth/codegen-sdk/base-types';

import { DocumentNode } from 'graphql';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetTestByFrontendQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTestByFrontendQuery = { __typename?: 'query_root', test: Array<{ __typename?: 'test', id: any, text: string }> };


export const GetTestByFrontendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTestByFrontend"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"test"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode;

export function useGetTestByFrontendQuery(options?: Omit<Urql.UseQueryArgs<GetTestByFrontendQueryVariables>, 'query'>) {
  return Urql.useQuery<GetTestByFrontendQuery>({ query: GetTestByFrontendDocument, ...options });
};