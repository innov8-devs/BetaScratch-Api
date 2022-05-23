import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalScalarWhereInput } from './refferal-scalar-where.input';
import { RefferalUpdateManyMutationInput } from './refferal-update-many-mutation.input';

@InputType()
export class RefferalUpdateManyWithWhereWithoutUserInput {

    @Field(() => RefferalScalarWhereInput, {nullable:false})
    where!: RefferalScalarWhereInput;

    @Field(() => RefferalUpdateManyMutationInput, {nullable:false})
    data!: RefferalUpdateManyMutationInput;
}
