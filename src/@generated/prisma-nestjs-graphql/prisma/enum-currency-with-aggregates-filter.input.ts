import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CURRENCY } from './currency.enum';
import { NestedEnumCURRENCYWithAggregatesFilter } from './nested-enum-currency-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCURRENCYFilter } from './nested-enum-currency-filter.input';

@InputType()
export class EnumCURRENCYWithAggregatesFilter {

    @Field(() => CURRENCY, {nullable:true})
    equals?: keyof typeof CURRENCY;

    @Field(() => [CURRENCY], {nullable:true})
    in?: Array<keyof typeof CURRENCY>;

    @Field(() => [CURRENCY], {nullable:true})
    notIn?: Array<keyof typeof CURRENCY>;

    @Field(() => NestedEnumCURRENCYWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCURRENCYWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCURRENCYFilter, {nullable:true})
    _min?: NestedEnumCURRENCYFilter;

    @Field(() => NestedEnumCURRENCYFilter, {nullable:true})
    _max?: NestedEnumCURRENCYFilter;
}
