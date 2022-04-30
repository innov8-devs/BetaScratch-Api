import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CURRENCY } from './currency.enum';

@InputType()
export class NestedEnumCURRENCYFilter {

    @Field(() => CURRENCY, {nullable:true})
    equals?: keyof typeof CURRENCY;

    @Field(() => [CURRENCY], {nullable:true})
    in?: Array<keyof typeof CURRENCY>;

    @Field(() => [CURRENCY], {nullable:true})
    notIn?: Array<keyof typeof CURRENCY>;

    @Field(() => NestedEnumCURRENCYFilter, {nullable:true})
    not?: NestedEnumCURRENCYFilter;
}
