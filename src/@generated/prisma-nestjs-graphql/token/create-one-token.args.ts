import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenCreateInput } from './token-create.input';

@ArgsType()
export class CreateOneTokenArgs {

    @Field(() => TokenCreateInput, {nullable:false})
    data!: TokenCreateInput;
}
