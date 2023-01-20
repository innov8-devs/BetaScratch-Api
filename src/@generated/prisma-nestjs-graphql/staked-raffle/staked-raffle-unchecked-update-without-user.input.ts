import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumRAFFLE_TYPEFieldUpdateOperationsInput } from '../prisma/enum-raffle-type-field-update-operations.input';
import { StakedRaffleUpdatenumbersInput } from '../prisma/staked-raffle-updatenumbers.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StakedRaffleUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => EnumRAFFLE_TYPEFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRAFFLE_TYPEFieldUpdateOperationsInput;

    @Field(() => StakedRaffleUpdatenumbersInput, {nullable:true})
    numbers?: StakedRaffleUpdatenumbersInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}