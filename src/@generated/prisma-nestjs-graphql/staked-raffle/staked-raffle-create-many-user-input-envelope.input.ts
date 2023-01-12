import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StakedRaffleCreateManyUserInput } from './staked-raffle-create-many-user.input';

@InputType()
export class StakedRaffleCreateManyUserInputEnvelope {

    @Field(() => [StakedRaffleCreateManyUserInput], {nullable:false})
    data!: Array<StakedRaffleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
