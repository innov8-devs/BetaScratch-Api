import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameUpdateInput } from './game-update.input';
import { GameWhereUniqueInput } from './game-where-unique.input';

@ArgsType()
export class UpdateOneGameArgs {

    @Field(() => GameUpdateInput, {nullable:false})
    data!: GameUpdateInput;

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;
}
