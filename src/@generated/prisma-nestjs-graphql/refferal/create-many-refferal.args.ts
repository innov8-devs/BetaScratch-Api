import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefferalCreateManyInput } from './refferal-create-many.input';

@ArgsType()
export class CreateManyRefferalArgs {

    @Field(() => [RefferalCreateManyInput], {nullable:false})
    data!: Array<RefferalCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
