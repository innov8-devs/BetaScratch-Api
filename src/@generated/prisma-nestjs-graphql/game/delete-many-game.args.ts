import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameWhereInput } from './game-where.input';

@ArgsType()
export class DeleteManyGameArgs {

    @Field(() => GameWhereInput, {nullable:true})
    where?: GameWhereInput;
}
