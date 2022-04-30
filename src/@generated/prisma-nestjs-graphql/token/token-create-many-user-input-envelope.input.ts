import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateManyUserInput } from './token-create-many-user.input';

@InputType()
export class TokenCreateManyUserInputEnvelope {

    @Field(() => [TokenCreateManyUserInput], {nullable:false})
    data!: Array<TokenCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
