import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereUniqueInput } from './game-where-unique.input';

@ArgsType()
export class DeleteOneGameArgs {

    @Field(() => GameWhereUniqueInput, {nullable:false})
    where!: GameWhereUniqueInput;
}
