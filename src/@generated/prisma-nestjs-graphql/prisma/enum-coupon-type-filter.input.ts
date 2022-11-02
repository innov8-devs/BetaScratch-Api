import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { COUPON_TYPE } from './coupon-type.enum';
import { NestedEnumCOUPON_TYPEFilter } from './nested-enum-coupon-type-filter.input';

@InputType()
export class EnumCOUPON_TYPEFilter {

    @Field(() => COUPON_TYPE, {nullable:true})
    equals?: keyof typeof COUPON_TYPE;

    @Field(() => [COUPON_TYPE], {nullable:true})
    in?: Array<keyof typeof COUPON_TYPE>;

    @Field(() => [COUPON_TYPE], {nullable:true})
    notIn?: Array<keyof typeof COUPON_TYPE>;

    @Field(() => NestedEnumCOUPON_TYPEFilter, {nullable:true})
    not?: NestedEnumCOUPON_TYPEFilter;
}
