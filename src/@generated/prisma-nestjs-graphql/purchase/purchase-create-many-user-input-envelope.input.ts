import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PurchaseCreateManyUserInput } from './purchase-create-many-user.input';

@InputType()
export class PurchaseCreateManyUserInputEnvelope {

    @Field(() => [PurchaseCreateManyUserInput], {nullable:false})
    data!: Array<PurchaseCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
