import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateWithoutMessageInput } from './admin-update-without-message.input';
import { AdminCreateWithoutMessageInput } from './admin-create-without-message.input';

@InputType()
export class AdminUpsertWithoutMessageInput {

    @Field(() => AdminUpdateWithoutMessageInput, {nullable:false})
    update!: AdminUpdateWithoutMessageInput;

    @Field(() => AdminCreateWithoutMessageInput, {nullable:false})
    create!: AdminCreateWithoutMessageInput;
}
