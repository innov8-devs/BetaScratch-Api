import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogCreateInput } from './flutterwave-log-create.input';

@ArgsType()
export class CreateOneFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogCreateInput, {nullable:false})
    data!: FlutterwaveLogCreateInput;
}
