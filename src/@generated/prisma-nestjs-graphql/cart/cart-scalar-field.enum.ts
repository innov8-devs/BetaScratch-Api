import { registerEnumType } from '@nestjs/graphql';

export enum CartScalarFieldEnum {
    id = "id",
    userId = "userId",
    name = "name",
    category = "category",
    price = "price",
    quantity = "quantity",
    imageUrl = "imageUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CartScalarFieldEnum, { name: 'CartScalarFieldEnum', description: undefined })
