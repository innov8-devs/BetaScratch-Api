import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      debug: false,
      playground: true,
      introspection: true,
      autoSchemaFile: true,
      cors: {
        credentials: true,
      },
      context: ({ req, res }) => ({ req, res }),
    };
  }
}
