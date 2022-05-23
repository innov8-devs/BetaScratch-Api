import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalWhereInput } from './refferal-where.input';

@ArgsType()
export class DeleteManyRefferalArgs {

    @Field(() => RefferalWhereInput, {nullable:true})
    where?: RefferalWhereInput;
}
