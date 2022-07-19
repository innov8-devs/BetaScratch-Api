import { registerEnumType } from '@nestjs/graphql';

export enum GameOrderByRelevanceFieldEnum {
    name = "name",
    imageUrl = "imageUrl",
    description = "description",
    gameId = "gameId",
    category = "category",
    status = "status"
}


registerEnumType(GameOrderByRelevanceFieldEnum, { name: 'GameOrderByRelevanceFieldEnum', description: undefined })
