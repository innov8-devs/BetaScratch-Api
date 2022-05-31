import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminCreateWithoutTokenInput } from './admin-create-without-token.input';

@InputType()
export class AdminCreateOrConnectWithoutTokenInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateWithoutTokenInput, {nullable:false})
    create!: AdminCreateWithoutTokenInput;
}
