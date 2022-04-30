import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GameCreateManyInput } from './game-create-many.input';

@ArgsType()
export class CreateManyGameArgs {

    @Field(() => [GameCreateManyInput], {nullable:false})
    data!: Array<GameCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
