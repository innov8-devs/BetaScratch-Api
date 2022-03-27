import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CURRENCY } from './currency.enum';

@InputType()
export class EnumCURRENCYFieldUpdateOperationsInput {

    @Field(() => CURRENCY, {nullable:true})
    set?: keyof typeof CURRENCY;
}
