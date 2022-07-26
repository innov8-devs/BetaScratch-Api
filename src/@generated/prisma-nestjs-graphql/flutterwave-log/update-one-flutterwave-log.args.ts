import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogUpdateInput } from './flutterwave-log-update.input';
import { FlutterwaveLogWhereUniqueInput } from './flutterwave-log-where-unique.input';

@ArgsType()
export class UpdateOneFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogUpdateInput, {nullable:false})
    data!: FlutterwaveLogUpdateInput;

    @Field(() => FlutterwaveLogWhereUniqueInput, {nullable:false})
    where!: FlutterwaveLogWhereUniqueInput;
}
