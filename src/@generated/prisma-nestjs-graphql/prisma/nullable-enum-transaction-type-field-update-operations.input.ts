import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TRANSACTION_TYPE } from './transaction-type.enum';

@InputType()
export class NullableEnumTRANSACTION_TYPEFieldUpdateOperationsInput {

    @Field(() => TRANSACTION_TYPE, {nullable:true})
    set?: keyof typeof TRANSACTION_TYPE;
}
