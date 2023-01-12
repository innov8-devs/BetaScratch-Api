import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleWhereInput } from './staked-raffle-where.input';

@InputType()
export class StakedRaffleListRelationFilter {

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    every?: StakedRaffleWhereInput;

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    some?: StakedRaffleWhereInput;

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    none?: StakedRaffleWhereInput;
}
