import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumRAFFLE_TYPEFieldUpdateOperationsInput } from '../prisma/enum-raffle-type-field-update-operations.input';
import { StakedRaffleUpdatenumbersInput } from '../prisma/staked-raffle-updatenumbers.input';
import { UserUpdateOneWithoutStakedRaffleNestedInput } from '../user/user-update-one-without-staked-raffle-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class StakedRaffleUpdateInput {

    @Field(() => EnumRAFFLE_TYPEFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRAFFLE_TYPEFieldUpdateOperationsInput;

    @Field(() => StakedRaffleUpdatenumbersInput, {nullable:true})
    numbers?: StakedRaffleUpdatenumbersInput;

    @Field(() => UserUpdateOneWithoutStakedRaffleNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutStakedRaffleNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
