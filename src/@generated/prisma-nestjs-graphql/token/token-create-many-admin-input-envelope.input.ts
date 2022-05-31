import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateManyAdminInput } from './token-create-many-admin.input';

@InputType()
export class TokenCreateManyAdminInputEnvelope {

    @Field(() => [TokenCreateManyAdminInput], {nullable:false})
    data!: Array<TokenCreateManyAdminInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
