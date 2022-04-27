import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import * as dotenv from 'dotenv';

dotenv.config();

type Context = { req: Request; res: Response };
@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      debug: false,
      playground: true,
      introspection: true,
      driver: ApolloDriver,
      autoSchemaFile: true,
      cors: {
        origin: [
          'https://betascratch.herokuapp.com',
          'http://localhost:3000',
          'http://127.0.0.1:3000',
          'https://beta-admin.vercel.app',
        ],
        credentials: true,
      },
      context: ({ req, res }: Context) => ({ req, res }),

      formatError: (error: GraphQLError) => ({
        error: error.originalError,
        code: error.extensions?.exception?.code,
        name: error.name || error.originalError?.name,
        message: error.message || error.originalError.message,
      }),
    };
  }
}
