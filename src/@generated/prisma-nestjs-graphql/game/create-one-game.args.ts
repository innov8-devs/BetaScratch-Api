import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCreateInput } from './game-create.input';

@ArgsType()
export class CreateOneGameArgs {

    @Field(() => GameCreateInput, {nullable:false})
    data!: GameCreateInput;
}
