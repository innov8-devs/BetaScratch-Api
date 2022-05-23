import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefferalCreateManyUserInput } from './refferal-create-many-user.input';

@InputType()
export class RefferalCreateManyUserInputEnvelope {

    @Field(() => [RefferalCreateManyUserInput], {nullable:false})
    data!: Array<RefferalCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
