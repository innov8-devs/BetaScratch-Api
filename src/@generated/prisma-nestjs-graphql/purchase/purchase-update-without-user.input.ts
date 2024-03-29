import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CartUpdateManyWithoutPurchaseNestedInput } from '../cart/cart-update-many-without-purchase-nested.input';
import { NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput } from '../prisma/nullable-enum-transaction-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { CouponUpdateManyWithoutPurchaseNestedInput } from '../coupon/coupon-update-many-without-purchase-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PurchaseUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    quantity?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    reference?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    subtotal?: IntFieldUpdateOperationsInput;

    @Field(() => CartUpdateManyWithoutPurchaseNestedInput, {nullable:true})
    cards?: CartUpdateManyWithoutPurchaseNestedInput;

    @Field(() => NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput, {nullable:true})
    transactionType?: NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flutterwaveType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    couponUsed?: BoolFieldUpdateOperationsInput;

    @Field(() => CouponUpdateManyWithoutPurchaseNestedInput, {nullable:true})
    coupon?: CouponUpdateManyWithoutPurchaseNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
