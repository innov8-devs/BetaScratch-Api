import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from './raffle-type.enum';

@InputType()
export class EnumRAFFLE_TYPEFieldUpdateOperationsInput {

    @Field(() => RAFFLE_TYPE, {nullable:true})
    set?: keyof typeof RAFFLE_TYPE;
}
