import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ROLE } from './role.enum';

@InputType()
export class EnumROLEFieldUpdateOperationsInput {

    @Field(() => ROLE, {nullable:true})
    set?: keyof typeof ROLE;
}
