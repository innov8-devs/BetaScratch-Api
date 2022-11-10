import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { COUPON_QUANTITY } from './coupon-quantity.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCOUPON_QUANTITYFilter } from './nested-enum-coupon-quantity-filter.input';

@InputType()
export class NestedEnumCOUPON_QUANTITYWithAggregatesFilter {

    @Field(() => COUPON_QUANTITY, {nullable:true})
    equals?: keyof typeof COUPON_QUANTITY;

    @Field(() => [COUPON_QUANTITY], {nullable:true})
    in?: Array<keyof typeof COUPON_QUANTITY>;

    @Field(() => [COUPON_QUANTITY], {nullable:true})
    notIn?: Array<keyof typeof COUPON_QUANTITY>;

    @Field(() => NestedEnumCOUPON_QUANTITYWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCOUPON_QUANTITYWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCOUPON_QUANTITYFilter, {nullable:true})
    _min?: NestedEnumCOUPON_QUANTITYFilter;

    @Field(() => NestedEnumCOUPON_QUANTITYFilter, {nullable:true})
    _max?: NestedEnumCOUPON_QUANTITYFilter;
}
