import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GENDER } from './gender.enum';
import { NestedEnumGENDERWithAggregatesFilter } from './nested-enum-gender-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumGENDERFilter } from './nested-enum-gender-filter.input';

@InputType()
export class EnumGENDERWithAggregatesFilter {

    @Field(() => GENDER, {nullable:true})
    equals?: keyof typeof GENDER;

    @Field(() => [GENDER], {nullable:true})
    in?: Array<keyof typeof GENDER>;

    @Field(() => [GENDER], {nullable:true})
    notIn?: Array<keyof typeof GENDER>;

    @Field(() => NestedEnumGENDERWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGENDERWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGENDERFilter, {nullable:true})
    _min?: NestedEnumGENDERFilter;

    @Field(() => NestedEnumGENDERFilter, {nullable:true})
    _max?: NestedEnumGENDERFilter;
}
