import { registerEnumType } from '@nestjs/graphql';

export enum BannerScalarFieldEnum {
    id = "id",
    imageUrl = "imageUrl",
    url = "url",
    createdAt = "createdAt"
}


registerEnumType(BannerScalarFieldEnum, { name: 'BannerScalarFieldEnum', description: undefined })
