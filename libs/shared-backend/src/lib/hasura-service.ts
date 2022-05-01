import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
import { print } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { HasuraQueryDTO } from './dto/hasura-query.dto';
import { get, isEmpty } from 'lodash';

export class HasuraService {
  clientHasuraGQL: GraphQLClient;
  clientHasura: AxiosInstance;

  constructor(endpoint: string, options: RequestInit = {}) {
    const gqlEndPoint = `${endpoint}/v1/graphql`;

    this.clientHasura = axios.create({
      baseURL: endpoint,
      headers: options.headers as AxiosRequestHeaders,
    });
    this.clientHasuraGQL = new GraphQLClient(gqlEndPoint, options);
  }

  async query({ query, variables, path }: HasuraQueryDTO) {
    const data = await this.clientHasuraGQL.request(print(query), variables);
    return !isEmpty(path) ? get(data, `${path}`) : data;
  }

  async manageHasura(queryData: any) {
    const { data } = await this.clientHasura.post('/v1/query', queryData);

    return data;
  }

  async runSQL(sqlQuery: string) {
    return await this.manageHasura({
      type: 'run_sql',
      args: {
        sql: sqlQuery,
      },
    });
  }

  async createScheduledEvent(
    id: string,
    webhook: string,
    schedule_at: string,
    payload: any
  ) {
    return await this.manageHasura({
      type: 'create_scheduled_event',
      args: {
        webhook,
        schedule_at,
        payload: payload,
        retry_conf: {
          num_retries: 3,
          timeout_seconds: 120,
          tolerance_seconds: 21675,
          retry_interval_seconds: 12,
        },
        comment: id,
      },
    });
  }

  async deleteScheduledEvent(id: string) {
    return await this.manageHasura({
      type: 'run_sql',
      args: {
        sql: `delete from hdb_catalog.hdb_scheduled_events where comment='${id}'`,
      },
    });
  }
}
export enum HasuraEventOperations {
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  MANUAL = 'MANUAL',
}
