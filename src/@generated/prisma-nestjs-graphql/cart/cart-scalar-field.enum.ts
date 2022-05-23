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
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CartScalarFieldEnum, { name: 'CartScalarFieldEnum', description: undefined })
