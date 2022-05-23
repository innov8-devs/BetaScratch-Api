import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { RefferalUpdateWithoutUserInput } from './refferal-update-without-user.input';

@InputType()
export class RefferalUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RefferalWhereUniqueInput, {nullable:false})
    where!: RefferalWhereUniqueInput;

    @Field(() => RefferalUpdateWithoutUserInput, {nullable:false})
    data!: RefferalUpdateWithoutUserInput;
}
