import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ROLE } from './role.enum';
import { NestedEnumROLEWithAggregatesFilter } from './nested-enum-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumROLEFilter } from './nested-enum-role-filter.input';

@InputType()
export class EnumROLEWithAggregatesFilter {

    @Field(() => ROLE, {nullable:true})
    equals?: keyof typeof ROLE;

    @Field(() => [ROLE], {nullable:true})
    in?: Array<keyof typeof ROLE>;

    @Field(() => [ROLE], {nullable:true})
    notIn?: Array<keyof typeof ROLE>;

    @Field(() => NestedEnumROLEWithAggregatesFilter, {nullable:true})
    not?: NestedEnumROLEWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumROLEFilter, {nullable:true})
    _min?: NestedEnumROLEFilter;

    @Field(() => NestedEnumROLEFilter, {nullable:true})
    _max?: NestedEnumROLEFilter;
}
