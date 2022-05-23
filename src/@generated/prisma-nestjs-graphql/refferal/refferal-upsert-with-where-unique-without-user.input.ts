import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalWhereUniqueInput } from './refferal-where-unique.input';
import { RefferalUpdateWithoutUserInput } from './refferal-update-without-user.input';
import { RefferalCreateWithoutUserInput } from './refferal-create-without-user.input';

@InputType()
export class RefferalUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RefferalWhereUniqueInput, {nullable:false})
    where!: RefferalWhereUniqueInput;

    @Field(() => RefferalUpdateWithoutUserInput, {nullable:false})
    update!: RefferalUpdateWithoutUserInput;

    @Field(() => RefferalCreateWithoutUserInput, {nullable:false})
    create!: RefferalCreateWithoutUserInput;
}
