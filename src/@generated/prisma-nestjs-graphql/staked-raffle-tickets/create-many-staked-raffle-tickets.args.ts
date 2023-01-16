import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleTicketsCreateManyInput } from './staked-raffle-tickets-create-many.input';

@ArgsType()
export class CreateManyStakedRaffleTicketsArgs {

    @Field(() => [StakedRaffleTicketsCreateManyInput], {nullable:false})
    data!: Array<StakedRaffleTicketsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
