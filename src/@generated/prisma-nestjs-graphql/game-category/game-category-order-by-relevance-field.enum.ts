import { registerEnumType } from '@nestjs/graphql';

export enum GameCategoryOrderByRelevanceFieldEnum {
    categoryName = "categoryName"
}


registerEnumType(GameCategoryOrderByRelevanceFieldEnum, { name: 'GameCategoryOrderByRelevanceFieldEnum', description: undefined })
