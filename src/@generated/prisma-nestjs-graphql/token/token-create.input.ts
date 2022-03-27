import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateNestedOneWithoutTokensInput } from '../user/user-create-nested-one-without-tokens.input';

@InputType()
export class TokenCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    subject!: string;

    @Field(() => Date, {nullable:false})
    expire!: Date | string;

    @Field(() => Boolean, {nullable:false})
    @Validator.IsBoolean()
    validity!: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    mobileNumber!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    code!: string;

    @Field(() => UserCreateNestedOneWithoutTokensInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTokensInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
