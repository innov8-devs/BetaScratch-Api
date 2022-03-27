import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameUpdateManyMutationInput } from './game-update-many-mutation.input';
import { GameWhereInput } from './game-where.input';

@ArgsType()
export class UpdateManyGameArgs {

    @Field(() => GameUpdateManyMutationInput, {nullable:false})
    data!: GameUpdateManyMutationInput;

    @Field(() => GameWhereInput, {nullable:true})
    where?: GameWhereInput;
}
