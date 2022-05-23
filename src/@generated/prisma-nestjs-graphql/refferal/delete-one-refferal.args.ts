import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';

@ArgsType()
export class DeleteOneRefferalArgs {

    @Field(() => RefferalWhereUniqueInput, {nullable:false})
    where!: RefferalWhereUniqueInput;
}
