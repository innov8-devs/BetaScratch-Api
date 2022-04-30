import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutWalletInput } from '../user/user-create-nested-one-without-wallet.input';
import { Float } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class WalletCreateInput {

    @Field(() => UserCreateNestedOneWithoutWalletInput, {nullable:false})
    user!: UserCreateNestedOneWithoutWalletInput;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    withdrawable!: number;

    @Field(() => Float, {nullable:false})
    @Validator.IsNumber()
    bonus!: number;

    @Field(() => String, {nullable:false})
    currency!: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsString()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
