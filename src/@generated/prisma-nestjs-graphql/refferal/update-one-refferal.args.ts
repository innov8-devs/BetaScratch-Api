import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalUpdateInput } from './refferal-update.input';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';

@ArgsType()
export class UpdateOneRefferalArgs {

    @Field(() => RefferalUpdateInput, {nullable:false})
    data!: RefferalUpdateInput;

    @Field(() => RefferalWhereUniqueInput, {nullable:false})
    where!: RefferalWhereUniqueInput;
}
