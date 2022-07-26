import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogUpdateManyMutationInput } from './flutterwave-log-update-many-mutation.input';
import { FlutterwaveLogWhereInput } from './flutterwave-log-where.input';

@ArgsType()
export class UpdateManyFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogUpdateManyMutationInput, {nullable:false})
    data!: FlutterwaveLogUpdateManyMutationInput;

    @Field(() => FlutterwaveLogWhereInput, {nullable:true})
    where?: FlutterwaveLogWhereInput;
}
