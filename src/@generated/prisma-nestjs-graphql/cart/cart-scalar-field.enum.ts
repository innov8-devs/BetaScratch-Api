import { registerEnumType } from '@nestjs/graphql';

export enum CartScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    category = "category",
    price = "price",
    quantity = "quantity",
    imageUrl = "imageUrl",
    played = "played",
    reference = "reference",
    transactionRef = "transactionRef",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    purchaseId = "purchaseId"
}


registerEnumType(CartScalarFieldEnum, { name: 'CartScalarFieldEnum', description: undefined })
