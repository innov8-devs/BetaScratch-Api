import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogWhereUniqueInput } from './flutterwave-log-where-unique.input';
import { FlutterwaveLogCreateInput } from './flutterwave-log-create.input';
import { FlutterwaveLogUpdateInput } from './flutterwave-log-update.input';

@ArgsType()
export class UpsertOneFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogWhereUniqueInput, {nullable:false})
    where!: FlutterwaveLogWhereUniqueInput;

    @Field(() => FlutterwaveLogCreateInput, {nullable:false})
    create!: FlutterwaveLogCreateInput;

    @Field(() => FlutterwaveLogUpdateInput, {nullable:false})
    update!: FlutterwaveLogUpdateInput;
}
