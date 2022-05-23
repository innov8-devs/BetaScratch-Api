import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalWhereInput } from './refferal-where.input';

@InputType()
export class RefferalListRelationFilter {

    @Field(() => RefferalWhereInput, {nullable:true})
    every?: RefferalWhereInput;

    @Field(() => RefferalWhereInput, {nullable:true})
    some?: RefferalWhereInput;

    @Field(() => RefferalWhereInput, {nullable:true})
    none?: RefferalWhereInput;
}
