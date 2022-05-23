import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalCreatereferralsInput } from '../prisma/refferal-createreferrals.input';
import { UserCreateNestedOneWithoutRefferalInput } from '../user/user-create-nested-one-without-refferal.input';

@InputType()
export class RefferalCreateInput {

    @Field(() => RefferalCreatereferralsInput, {nullable:true})
    referrals?: RefferalCreatereferralsInput;

    @Field(() => UserCreateNestedOneWithoutRefferalInput, {nullable:false})
    User!: UserCreateNestedOneWithoutRefferalInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
