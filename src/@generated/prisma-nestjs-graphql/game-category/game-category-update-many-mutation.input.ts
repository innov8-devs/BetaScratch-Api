import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class GameCategoryUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryName?: StringFieldUpdateOperationsInput;
}
