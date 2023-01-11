import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from './raffle-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRAFFLE_TYPEFilter } from './nested-enum-raffle-type-filter.input';

@InputType()
export class NestedEnumRAFFLE_TYPEWithAggregatesFilter {

    @Field(() => RAFFLE_TYPE, {nullable:true})
    equals?: keyof typeof RAFFLE_TYPE;

    @Field(() => [RAFFLE_TYPE], {nullable:true})
    in?: Array<keyof typeof RAFFLE_TYPE>;

    @Field(() => [RAFFLE_TYPE], {nullable:true})
    notIn?: Array<keyof typeof RAFFLE_TYPE>;

    @Field(() => NestedEnumRAFFLE_TYPEWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRAFFLE_TYPEWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRAFFLE_TYPEFilter, {nullable:true})
    _min?: NestedEnumRAFFLE_TYPEFilter;

    @Field(() => NestedEnumRAFFLE_TYPEFilter, {nullable:true})
    _max?: NestedEnumRAFFLE_TYPEFilter;
}
