import { Field, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class UpdateGameInput {
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  imageUrl?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => GraphQLJSON, { nullable: true })
  price?: any;
  @Field(() => String, { nullable: true })
  category?: string;
  @Field(() => Number, { nullable: true })
  availability?: number;
}
