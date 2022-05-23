import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { RefferalCreateWithoutUserInput } from './refferal-create-without-user.input';

@InputType()
export class RefferalCreateOrConnectWithoutUserInput {

    @Field(() => RefferalWhereUniqueInput, {nullable:false})
    where!: RefferalWhereUniqueInput;

    @Field(() => RefferalCreateWithoutUserInput, {nullable:false})
    create!: RefferalCreateWithoutUserInput;
}
