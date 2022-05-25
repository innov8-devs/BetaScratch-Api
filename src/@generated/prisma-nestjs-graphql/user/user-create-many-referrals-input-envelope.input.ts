import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyReferralsInput } from './user-create-many-referrals.input';

@InputType()
export class UserCreateManyReferralsInputEnvelope {

    @Field(() => [UserCreateManyReferralsInput], {nullable:false})
    data!: Array<UserCreateManyReferralsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
