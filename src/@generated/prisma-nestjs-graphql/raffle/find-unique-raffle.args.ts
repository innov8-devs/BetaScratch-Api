import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereUniqueInput } from './raffle-where-unique.input';

@ArgsType()
export class FindUniqueRaffleArgs {

    @Field(() => RaffleWhereUniqueInput, {nullable:false})
    where!: RaffleWhereUniqueInput;
}
