import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRAFFLE_TYPEFieldUpdateOperationsInput } from '../prisma/enum-raffle-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumTRANSACTION_TYPEFieldUpdateOperationsInput } from '../prisma/enum-transaction-type-field-update-operations.input';
import { UserUpdateOneWithoutStakedRaffleTicketsNestedInput } from '../user/user-update-one-without-staked-raffle-tickets-nested.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StakedRaffleTicketsUpdateInput {

    @Field(() => EnumRAFFLE_TYPEFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRAFFLE_TYPEFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    originalNumbers?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sortedNumbers?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    reference?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumTRANSACTION_TYPEFieldUpdateOperationsInput, {nullable:true})
    transactionType?: EnumTRANSACTION_TYPEFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutStakedRaffleTicketsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutStakedRaffleTicketsNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isPaid?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
