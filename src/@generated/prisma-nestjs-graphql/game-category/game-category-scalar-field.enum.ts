import { registerEnumType } from '@nestjs/graphql';

export enum GameCategoryScalarFieldEnum {
    id = "id",
    categoryName = "categoryName"
}


registerEnumType(GameCategoryScalarFieldEnum, { name: 'GameCategoryScalarFieldEnum', description: undefined })
