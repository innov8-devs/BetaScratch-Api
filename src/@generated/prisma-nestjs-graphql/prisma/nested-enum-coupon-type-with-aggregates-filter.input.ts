import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { COUPON_TYPE } from './coupon-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCOUPON_TYPEFilter } from './nested-enum-coupon-type-filter.input';

@InputType()
export class NestedEnumCOUPON_TYPEWithAggregatesFilter {

    @Field(() => COUPON_TYPE, {nullable:true})
    equals?: keyof typeof COUPON_TYPE;

    @Field(() => [COUPON_TYPE], {nullable:true})
    in?: Array<keyof typeof COUPON_TYPE>;

    @Field(() => [COUPON_TYPE], {nullable:true})
    notIn?: Array<keyof typeof COUPON_TYPE>;

    @Field(() => NestedEnumCOUPON_TYPEWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCOUPON_TYPEWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCOUPON_TYPEFilter, {nullable:true})
    _min?: NestedEnumCOUPON_TYPEFilter;

    @Field(() => NestedEnumCOUPON_TYPEFilter, {nullable:true})
    _max?: NestedEnumCOUPON_TYPEFilter;
}
