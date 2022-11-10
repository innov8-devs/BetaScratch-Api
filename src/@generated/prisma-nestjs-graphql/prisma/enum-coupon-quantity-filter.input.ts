import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { COUPON_QUANTITY } from './coupon-quantity.enum';
import { NestedEnumCOUPON_QUANTITYFilter } from './nested-enum-coupon-quantity-filter.input';

@InputType()
export class EnumCOUPON_QUANTITYFilter {

    @Field(() => COUPON_QUANTITY, {nullable:true})
    equals?: keyof typeof COUPON_QUANTITY;

    @Field(() => [COUPON_QUANTITY], {nullable:true})
    in?: Array<keyof typeof COUPON_QUANTITY>;

    @Field(() => [COUPON_QUANTITY], {nullable:true})
    notIn?: Array<keyof typeof COUPON_QUANTITY>;

    @Field(() => NestedEnumCOUPON_QUANTITYFilter, {nullable:true})
    not?: NestedEnumCOUPON_QUANTITYFilter;
}
