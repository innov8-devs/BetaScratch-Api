import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenUpdateManyMutationInput } from './token-update-many-mutation.input';
import { TokenWhereInput } from './token-where.input';

@ArgsType()
export class UpdateManyTokenArgs {

    @Field(() => TokenUpdateManyMutationInput, {nullable:false})
    data!: TokenUpdateManyMutationInput;

    @Field(() => TokenWhereInput, {nullable:true})
    where?: TokenWhereInput;
}
