import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CartUncheckedCreateNestedManyWithoutPurchaseInput } from '../cart/cart-unchecked-create-nested-many-without-purchase.input';
import { TRANSACTION_TYPE } from '../prisma/transaction-type.enum';
import { CouponUncheckedCreateNestedManyWithoutPurchaseInput } from '../coupon/coupon-unchecked-create-nested-many-without-purchase.input';

@InputType()
export class PurchaseUncheckedCreateWithoutUserInput {

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

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    transactionType?: keyof typeof TRANSACTION_TYPE;

    @Field(() => String, {nullable:true})
    flutterwaveType?: string;

    @Field(() => Boolean, {nullable:true})
    couponUsed?: boolean;

    @Field(() => CouponUncheckedCreateNestedManyWithoutPurchaseInput, {nullable:true})
    coupon?: CouponUncheckedCreateNestedManyWithoutPurchaseInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
