import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { RefferalCreateInput } from './refferal-create.input';
import { RefferalUpdateInput } from './refferal-update.input';

@ArgsType()
export class UpsertOneRefferalArgs {

    @Field(() => RefferalWhereUniqueInput, {nullable:false})
    where!: RefferalWhereUniqueInput;

    @Field(() => RefferalCreateInput, {nullable:false})
    create!: RefferalCreateInput;

    @Field(() => RefferalUpdateInput, {nullable:false})
    update!: RefferalUpdateInput;
}
