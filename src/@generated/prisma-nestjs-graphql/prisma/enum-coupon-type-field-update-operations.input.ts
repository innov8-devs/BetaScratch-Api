import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { COUPON_TYPE } from './coupon-type.enum';

@InputType()
export class EnumCOUPON_TYPEFieldUpdateOperationsInput {

    @Field(() => COUPON_TYPE, {nullable:true})
    set?: keyof typeof COUPON_TYPE;
}
