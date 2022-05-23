import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalUpdateManyMutationInput } from './refferal-update-many-mutation.input';
import { RefferalWhereInput } from './refferal-where.input';

@ArgsType()
export class UpdateManyRefferalArgs {

    @Field(() => RefferalUpdateManyMutationInput, {nullable:false})
    data!: RefferalUpdateManyMutationInput;

    @Field(() => RefferalWhereInput, {nullable:true})
    where?: RefferalWhereInput;
}
