import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from './transaction-type.enum';
import { NestedEnumTRANSACTION_TYPENullableWithAggregatesFilter } from './nested-enum-transaction-type-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTRANSACTION_TYPENullableFilter } from './nested-enum-transaction-type-nullable-filter.input';

@InputType()
export class EnumTRANSACTION_TYPENullableWithAggregatesFilter {

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    equals?: keyof typeof TRANSACTION_TYPE;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    in?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    notIn?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => NestedEnumTRANSACTION_TYPENullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTRANSACTION_TYPENullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTRANSACTION_TYPENullableFilter, {nullable:true})
    _min?: NestedEnumTRANSACTION_TYPENullableFilter;

    @Field(() => NestedEnumTRANSACTION_TYPENullableFilter, {nullable:true})
    _max?: NestedEnumTRANSACTION_TYPENullableFilter;
}
