import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from './transaction-type.enum';

@InputType()
export class NestedEnumTRANSACTION_TYPENullableFilter {

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    equals?: keyof typeof TRANSACTION_TYPE;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    in?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => [TRANSACTION_TYPE], {nullable:true})
    notIn?: Array<keyof typeof TRANSACTION_TYPE>;

    @Field(() => NestedEnumTRANSACTION_TYPENullableFilter, {nullable:true})
    not?: NestedEnumTRANSACTION_TYPENullableFilter;
}
