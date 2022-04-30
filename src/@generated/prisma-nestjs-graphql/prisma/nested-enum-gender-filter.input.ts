import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GENDER } from './gender.enum';

@InputType()
export class NestedEnumGENDERFilter {

    @Field(() => GENDER, {nullable:true})
    equals?: keyof typeof GENDER;

    @Field(() => [GENDER], {nullable:true})
    in?: Array<keyof typeof GENDER>;

    @Field(() => [GENDER], {nullable:true})
    notIn?: Array<keyof typeof GENDER>;

    @Field(() => NestedEnumGENDERFilter, {nullable:true})
    not?: NestedEnumGENDERFilter;
}
