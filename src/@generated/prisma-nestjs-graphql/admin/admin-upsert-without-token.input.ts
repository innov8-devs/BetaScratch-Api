import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateWithoutTokenInput } from './admin-update-without-token.input';
import { AdminCreateWithoutTokenInput } from './admin-create-without-token.input';

@InputType()
export class AdminUpsertWithoutTokenInput {

    @Field(() => AdminUpdateWithoutTokenInput, {nullable:false})
    update!: AdminUpdateWithoutTokenInput;

    @Field(() => AdminCreateWithoutTokenInput, {nullable:false})
    create!: AdminCreateWithoutTokenInput;
}
