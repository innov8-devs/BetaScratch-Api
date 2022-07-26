import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogCreateManyInput } from './flutterwave-log-create-many.input';

@ArgsType()
export class CreateManyFlutterwaveLogArgs {

    @Field(() => [FlutterwaveLogCreateManyInput], {nullable:false})
    data!: Array<FlutterwaveLogCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
