import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from './transaction-type.enum';
import { NestedEnumTRANSACTION_TYPEWithAggregatesFilter } from './nested-enum-transaction-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTRANSACTION_TYPEFilter } from './nested-enum-transaction-type-filter.input';

@InputType()
export class EnumTRANSACTION_TYPEWithAggregatesFilter {

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    equals?: keyof typeof TRANSACTION_TYPE;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    in?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    notIn?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => NestedEnumTRANSACTION_TYPEWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTRANSACTION_TYPEWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTRANSACTION_TYPEFilter, {nullable:true})
    _min?: NestedEnumTRANSACTION_TYPEFilter;

    @Field(() => NestedEnumTRANSACTION_TYPEFilter, {nullable:true})
    _max?: NestedEnumTRANSACTION_TYPEFilter;
}
