import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RAFFLE_TYPE } from './raffle-type.enum';

@InputType()
export class NestedEnumRAFFLE_TYPEFilter {

    @Field(() => RAFFLE_TYPE, {nullable:true})
    equals?: keyof typeof RAFFLE_TYPE;

    @Field(() => [RAFFLE_TYPE], {nullable:true})
    in?: Array<keyof typeof RAFFLE_TYPE>;

    @Field(() => [RAFFLE_TYPE], {nullable:true})
    notIn?: Array<keyof typeof RAFFLE_TYPE>;

    @Field(() => NestedEnumRAFFLE_TYPEFilter, {nullable:true})
    not?: NestedEnumRAFFLE_TYPEFilter;
}
