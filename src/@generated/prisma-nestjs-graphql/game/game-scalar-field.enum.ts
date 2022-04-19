import { registerEnumType } from '@nestjs/graphql';

export enum GameScalarFieldEnum {
    id = "id",
    name = "name",
    imageUrl = "imageUrl",
    description = "description",
    gameId = "gameId",
    price = "price",
    availability = "availability"
}


registerEnumType(GameScalarFieldEnum, { name: 'GameScalarFieldEnum', description: undefined })
