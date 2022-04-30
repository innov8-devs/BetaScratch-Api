import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GENDER } from './gender.enum';

@InputType()
export class EnumGENDERFieldUpdateOperationsInput {

    @Field(() => GENDER, {nullable:true})
    set?: keyof typeof GENDER;
}
