import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from './raffle-type.enum';
import { NestedEnumRAFFLE_TYPEFilter } from './nested-enum-raffle-type-filter.input';

@InputType()
export class EnumRAFFLE_TYPEFilter {

    @Field(() => RAFFLE_TYPE, {nullable:true})
    equals?: keyof typeof RAFFLE_TYPE;

    @Field(() => [RAFFLE_TYPE], {nullable:true})
    in?: Array<keyof typeof RAFFLE_TYPE>;

    @Field(() => [RAFFLE_TYPE], {nullable:true})
    notIn?: Array<keyof typeof RAFFLE_TYPE>;

    @Field(() => NestedEnumRAFFLE_TYPEFilter, {nullable:true})
    not?: NestedEnumRAFFLE_TYPEFilter;
}
