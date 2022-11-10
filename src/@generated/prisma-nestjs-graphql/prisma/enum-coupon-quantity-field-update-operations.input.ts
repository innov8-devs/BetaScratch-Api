import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { COUPON_QUANTITY } from './coupon-quantity.enum';

@InputType()
export class EnumCOUPON_QUANTITYFieldUpdateOperationsInput {

    @Field(() => COUPON_QUANTITY, {nullable:true})
    set?: keyof typeof COUPON_QUANTITY;
}
