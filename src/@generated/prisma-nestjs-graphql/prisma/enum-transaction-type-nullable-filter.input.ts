import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from './transaction-type.enum';
import { NestedEnumTRANSACTION_TYPENullableFilter } from './nested-enum-transaction-type-nullable-filter.input';

@InputType()
export class EnumTRANSACTION_TYPENullableFilter {

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    equals?: keyof typeof TRANSACTION_TYPE;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    in?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    notIn?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => NestedEnumTRANSACTION_TYPENullableFilter, {nullable:true})
    not?: NestedEnumTRANSACTION_TYPENullableFilter;
}
