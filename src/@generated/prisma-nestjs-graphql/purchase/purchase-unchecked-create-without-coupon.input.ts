import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartUncheckedCreateNestedManyWithoutPurchaseInput } from '../cart/cart-unchecked-create-nested-many-without-purchase.input';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';

@InputType()
export class PurchaseUncheckedCreateWithoutCouponInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    reference!: string;

    @Field(() => Int, {nullable:true})
    subtotal?: number;

    @Field(() => CartUncheckedCreateNestedManyWithoutPurchaseInput, {nullable:true})
    cards?: CartUncheckedCreateNestedManyWithoutPurchaseInput;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    transactionType?: keyof typeof TRANSACTION_TYPE;

    @Field(() => String, {nullable:true})
    flutterwaveType?: string;

    @Field(() => Boolean, {nullable:true})
    couponUsed?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
