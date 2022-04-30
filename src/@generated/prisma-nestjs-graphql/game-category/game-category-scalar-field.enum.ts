import { registerEnumType } from '@nestjs/graphql';

export enum GameCategoryScalarFieldEnum {
    id = "id",
    categoryName = "categoryName",
    categoryLabel = "categoryLabel"
}


registerEnumType(GameCategoryScalarFieldEnum, { name: 'GameCategoryScalarFieldEnum', description: undefined })
