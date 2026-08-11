import { inject, Injectable } from '@angular/core';
import {
  GraphQLExecutionError,
  GraphQLExecutionResult,
  GraphQLRequest,
  HttpRequest,
} from './api-tester.model';
import { HttpRequestExecutor } from './http-request-executor.service';

@Injectable({ providedIn: 'root' })
export class GraphQLRequestExecutor {
  private readonly httpExecutor = inject(HttpRequestExecutor);

  async execute(request: GraphQLRequest): Promise<GraphQLExecutionResult> {
    const variables = parseVariables(request.variables);
    const payload: Record<string, unknown> = { query: request.query };

    if (variables !== undefined) {
      payload['variables'] = variables;
    }
    if (request.operationName?.trim()) {
      payload['operationName'] = request.operationName.trim();
    }

    const httpRequest: HttpRequest = {
      type: 'HTTP',
      method: 'POST',
      url: request.url,
      queryParams: [],
      headers: request.headers,
      auth: request.auth,
      body: { type: 'JSON', content: JSON.stringify(payload) },
    };
    const response = await this.httpExecutor.execute(httpRequest);

    return {
      ...response,
      protocol: 'GRAPHQL',
      graphQLErrors: extractGraphQLErrors(response.body),
    };
  }
}

function parseVariables(source?: string): Record<string, unknown> | undefined {
  if (!source?.trim()) {
    return undefined;
  }

  let value: unknown;
  try {
    value = JSON.parse(source);
  } catch {
    throw new Error('GraphQL variables must contain valid JSON.');
  }

  if (!isRecord(value)) {
    throw new Error('GraphQL variables must be a JSON object.');
  }
  return value;
}

function extractGraphQLErrors(body: string): GraphQLExecutionError[] {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return [];
  }

  if (!isRecord(payload) || !Array.isArray(payload['errors'])) {
    return [];
  }

  return payload['errors'].map((error) => {
    if (!isRecord(error)) {
      return { message: String(error) };
    }

    const path = Array.isArray(error['path'])
      ? error['path'].filter(
          (segment): segment is string | number =>
            typeof segment === 'string' || typeof segment === 'number',
        )
      : undefined;

    return {
      message: typeof error['message'] === 'string' ? error['message'] : 'Unknown GraphQL error',
      path,
      extensions: isRecord(error['extensions']) ? error['extensions'] : undefined,
    };
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
