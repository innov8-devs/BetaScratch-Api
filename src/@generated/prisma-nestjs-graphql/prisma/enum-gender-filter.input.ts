import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GENDER } from './gender.enum';
import { NestedEnumGENDERFilter } from './nested-enum-gender-filter.input';

@InputType()
export class EnumGENDERFilter {

    @Field(() => GENDER, {nullable:true})
    equals?: keyof typeof GENDER;

    @Field(() => [GENDER], {nullable:true})
    in?: Array<keyof typeof GENDER>;

    @Field(() => [GENDER], {nullable:true})
    notIn?: Array<keyof typeof GENDER>;

    @Field(() => NestedEnumGENDERFilter, {nullable:true})
    not?: NestedEnumGENDERFilter;
}
