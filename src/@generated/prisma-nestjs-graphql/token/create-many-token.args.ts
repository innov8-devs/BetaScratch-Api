import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenCreateManyInput } from './token-create-many.input';

@ArgsType()
export class CreateManyTokenArgs {

    @Field(() => [TokenCreateManyInput], {nullable:false})
    data!: Array<TokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
