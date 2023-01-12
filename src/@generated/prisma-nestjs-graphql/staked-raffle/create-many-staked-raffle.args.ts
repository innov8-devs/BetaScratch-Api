import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StakedRaffleCreateManyInput } from './staked-raffle-create-many.input';

@ArgsType()
export class CreateManyStakedRaffleArgs {

    @Field(() => [StakedRaffleCreateManyInput], {nullable:false})
    data!: Array<StakedRaffleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
