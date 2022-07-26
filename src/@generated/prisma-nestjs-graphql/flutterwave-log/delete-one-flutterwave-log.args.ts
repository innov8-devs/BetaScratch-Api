import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogWhereUniqueInput } from './flutterwave-log-where-unique.input';

@ArgsType()
export class DeleteOneFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogWhereUniqueInput, {nullable:false})
    where!: FlutterwaveLogWhereUniqueInput;
}
