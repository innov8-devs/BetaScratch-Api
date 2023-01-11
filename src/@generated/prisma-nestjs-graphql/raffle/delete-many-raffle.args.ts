import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleWhereInput } from './raffle-where.input';

@ArgsType()
export class DeleteManyRaffleArgs {

    @Field(() => RaffleWhereInput, {nullable:true})
    where?: RaffleWhereInput;
}
