import { ASTNode } from 'graphql';

export interface HasuraQueryDTO {
  query: ASTNode;
  variables: object;
  path?: string;
}
