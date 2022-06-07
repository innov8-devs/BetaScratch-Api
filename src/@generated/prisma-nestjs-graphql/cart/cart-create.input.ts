import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPurchasesInput } from '../user/user-create-nested-one-without-purchases.input';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { PurchaseCreateNestedOneWithoutCardsInput } from '../purchase/purchase-create-nested-one-without-cards.input';

@InputType()
export class CartCreateInput {

    @Field(() => UserCreateNestedOneWithoutPurchasesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPurchasesInput;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    category!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    price!: any;

    @Field(() => Int, {nullable:false})
    @Validator.IsNumber()
    quantity!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    imageUrl!: string;

    @Field(() => Boolean, {nullable:true})
    @Validator.IsBoolean()
    played?: boolean;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    reference!: string;

    @Field(() => String, {nullable:true})
    transactionRef?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PurchaseCreateNestedOneWithoutCardsInput, {nullable:true})
    purchase?: PurchaseCreateNestedOneWithoutCardsInput;
}
