import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlutterwaveLogWhereInput } from './flutterwave-log-where.input';

@ArgsType()
export class DeleteManyFlutterwaveLogArgs {

    @Field(() => FlutterwaveLogWhereInput, {nullable:true})
    where?: FlutterwaveLogWhereInput;
}
