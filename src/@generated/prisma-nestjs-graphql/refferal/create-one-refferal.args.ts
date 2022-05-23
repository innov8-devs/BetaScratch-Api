import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalCreateInput } from './refferal-create.input';

@ArgsType()
export class CreateOneRefferalArgs {

    @Field(() => RefferalCreateInput, {nullable:false})
    data!: RefferalCreateInput;
}
