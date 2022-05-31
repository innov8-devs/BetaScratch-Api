import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminCreateWithoutMessageInput } from './admin-create-without-message.input';

@InputType()
export class AdminCreateOrConnectWithoutMessageInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateWithoutMessageInput, {nullable:false})
    create!: AdminCreateWithoutMessageInput;
}
