import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumROLEFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { MessageUpdateManyWithoutAdminInput } from '../message/message-update-many-without-admin.input';
import { TokenUpdateManyWithoutAdminInput } from '../token/token-update-many-without-admin.input';

@InputType()
export class AdminUpdateWithoutOtpInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: StringFieldUpdateOperationsInput;

    @Field(() => EnumROLEFieldUpdateOperationsInput, {nullable:true})
    role?: EnumROLEFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    mobileNumber?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    confirmed?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => MessageUpdateManyWithoutAdminInput, {nullable:true})
    Message?: MessageUpdateManyWithoutAdminInput;

    @Field(() => TokenUpdateManyWithoutAdminInput, {nullable:true})
    Token?: TokenUpdateManyWithoutAdminInput;
}