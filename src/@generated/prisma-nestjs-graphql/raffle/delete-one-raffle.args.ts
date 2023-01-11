import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereUniqueInput } from './raffle-where-unique.input';

@ArgsType()
export class DeleteOneRaffleArgs {

    @Field(() => RaffleWhereUniqueInput, {nullable:false})
    where!: RaffleWhereUniqueInput;
}
