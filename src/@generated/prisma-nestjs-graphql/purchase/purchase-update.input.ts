import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { CartUpdateManyWithoutPurchaseInput } from '../cart/cart-update-many-without-purchase.input';
import { UserUpdateOneRequiredWithoutPurchaseInput } from '../user/user-update-one-required-without-purchase.input';
import { NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput } from '../prisma/nullable-enum-transaction-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class PurchaseUpdateInput {

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

    @Field(() => CartUpdateManyWithoutPurchaseInput, {nullable:true})
    cards?: CartUpdateManyWithoutPurchaseInput;

    @Field(() => UserUpdateOneRequiredWithoutPurchaseInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutPurchaseInput;

    @Field(() => NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput, {nullable:true})
    transactionType?: NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    flutterwaveType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
