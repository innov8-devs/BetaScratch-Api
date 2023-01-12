import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleWhereInput } from './staked-raffle-where.input';

@ArgsType()
export class DeleteManyStakedRaffleArgs {

    @Field(() => StakedRaffleWhereInput, {nullable:true})
    where?: StakedRaffleWhereInput;
}
