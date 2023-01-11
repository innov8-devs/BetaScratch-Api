import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereUniqueInput } from './raffle-where-unique.input';
import { RaffleCreateInput } from './raffle-create.input';
import { RaffleUpdateInput } from './raffle-update.input';

@ArgsType()
export class UpsertOneRaffleArgs {

    @Field(() => RaffleWhereUniqueInput, {nullable:false})
    where!: RaffleWhereUniqueInput;

    @Field(() => RaffleCreateInput, {nullable:false})
    create!: RaffleCreateInput;

    @Field(() => RaffleUpdateInput, {nullable:false})
    update!: RaffleUpdateInput;
}
