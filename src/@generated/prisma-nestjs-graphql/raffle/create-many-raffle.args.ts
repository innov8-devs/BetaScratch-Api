import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RaffleCreateManyInput } from './raffle-create-many.input';

@ArgsType()
export class CreateManyRaffleArgs {

    @Field(() => [RaffleCreateManyInput], {nullable:false})
    data!: Array<RaffleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
