import { registerEnumType } from '@nestjs/graphql';

export enum GameScalarFieldEnum {
    id = "id",
    name = "name",
    imageUrl = "imageUrl",
    description = "description",
    gameId = "gameId",
    price = "price",
    category = "category",
    availability = "availability",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(GameScalarFieldEnum, { name: 'GameScalarFieldEnum', description: undefined })
