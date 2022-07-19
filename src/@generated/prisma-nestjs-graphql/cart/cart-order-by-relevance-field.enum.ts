import { registerEnumType } from '@nestjs/graphql';

export enum CartOrderByRelevanceFieldEnum {
    name = "name",
    category = "category",
    imageUrl = "imageUrl",
    reference = "reference",
    transactionRef = "transactionRef"
}


registerEnumType(CartOrderByRelevanceFieldEnum, { name: 'CartOrderByRelevanceFieldEnum', description: undefined })
