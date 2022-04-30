import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';

@ArgsType()
export class DeleteManyTokenArgs {

    @Field(() => TokenWhereInput, {nullable:true})
    where?: TokenWhereInput;
}
