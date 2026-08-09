import { CollectionModel } from '../api-tester.model';

export const Sandbox: CollectionModel = {
  id: 'sandbox',
  name: 'Sandbox',
  description:
    'Sandbox Collection API. Contains sandbox enviroment for testing. The data saved here is persisted at Local Storage. ',
  variables: [],
  items: [
    {
      type: 'FOLDER',
      id: 'sandbox-auth',
      name: 'Auth Service',
      items: [
        {
          type: 'REQUEST',
          id: 'sandbox-auth-login',
          name: '/v1/auth/login',
          request: {
            type: 'HTTP',
            method: 'POST',
            url: '/v1/auth/login',
            queryParams: [],
            headers: [],
            body: { type: 'JSON', content: '{\n  "email": "",\n  "password": ""\n}' },
          },
        },
        {
          type: 'REQUEST',
          id: 'sandbox-auth-refresh',
          name: '/v1/auth/refresh',
          request: {
            type: 'HTTP',
            method: 'POST',
            url: '/v1/auth/refresh',
            queryParams: [],
            headers: [],
            body: { type: 'JSON', content: '{\n  "refresh_token": ""\n}' },
          },
        },
      ],
    },
    {
      type: 'FOLDER',
      id: 'sandbox-users',
      name: 'User Management',
      items: [
        {
          type: 'REQUEST',
          id: 'sandbox-users-get',
          name: '/v1/users/{id}',
          request: {
            type: 'HTTP',
            method: 'GET',
            url: '/v1/users/{id}',
            queryParams: [
              {
                id: 'qp-include-metrics',
                key: 'include_metrics',
                value: 'true',
                enabled: true,
              },
            ],
            headers: [],
          },
        },
        {
          type: 'REQUEST',
          id: 'sandbox-users-put',
          name: '/v1/users/{id}',
          request: {
            type: 'HTTP',
            method: 'PUT',
            url: '/v1/users/{id}',
            queryParams: [],
            headers: [],
            body: { type: 'JSON', content: '{\n  "username": ""\n}' },
          },
        },
        {
          type: 'REQUEST',
          id: 'sandbox-users-delete',
          name: '/v1/users/{id}',
          request: {
            type: 'HTTP',
            method: 'DELETE',
            url: '/v1/users/{id}',
            queryParams: [],
            headers: [],
          },
        },
      ],
    },
    {
      type: 'FOLDER',
      id: 'sandbox-realtime',
      name: 'Realtime',
      items: [
        {
          type: 'REQUEST',
          id: 'sandbox-gql-user',
          name: 'UserProfile',
          request: {
            type: 'GRAPHQL',
            url: '/graphql',
            headers: [],
            query: 'query UserProfile($id: ID!) {\n  user(id: $id) {\n    id\n    username\n  }\n}',
            variables: '{\n  "id": "usr_98a7f6c5"\n}',
            operationName: 'UserProfile',
          },
        },
        {
          type: 'REQUEST',
          id: 'sandbox-ws-events',
          name: '/ws/events',
          request: {
            type: 'WEBSOCKET',
            url: 'wss://api.example.com/ws/events',
            headers: [],
            messages: [],
          },
        },
        {
          type: 'REQUEST',
          id: 'sandbox-grpc-get-user',
          name: 'UserService.GetUser',
          request: {
            type: 'GRPC',
            endpoint: 'api.example.com:443',
            service: 'UserService',
            method: 'GetUser',
            metadata: [],
            body: {
              id: 'grpc-body-get-user',
              type: 'TEXT',
              payload: '{\n  "id": "usr_98a7f6c5"\n}',
            },
          },
        },
      ],
    },
  ],
};
