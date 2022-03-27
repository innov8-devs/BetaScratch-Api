import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthResponse extends User {
  @Field()
  token?: string;
}
