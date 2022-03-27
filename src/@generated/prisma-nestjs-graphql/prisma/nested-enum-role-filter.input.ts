import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ROLE } from './role.enum';

@InputType()
export class NestedEnumROLEFilter {

    @Field(() => ROLE, {nullable:true})
    equals?: keyof typeof ROLE;

    @Field(() => [ROLE], {nullable:true})
    in?: Array<keyof typeof ROLE>;

    @Field(() => [ROLE], {nullable:true})
    notIn?: Array<keyof typeof ROLE>;

    @Field(() => NestedEnumROLEFilter, {nullable:true})
    not?: NestedEnumROLEFilter;
}
