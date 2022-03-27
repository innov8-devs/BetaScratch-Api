import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';
import { GameCreateInput } from './game-create.input';
import { GameUpdateInput } from './game-update.input';

@ArgsType()
export class UpsertOneGameArgs {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;

    @Field(() => GameCreateInput, {nullable:false})
    create!: GameCreateInput;

    @Field(() => GameUpdateInput, {nullable:false})
    update!: GameUpdateInput;
}
