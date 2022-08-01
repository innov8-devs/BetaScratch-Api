import { registerEnumType } from '@nestjs/graphql';

export enum BannerScalarFieldEnum {
    id = "id",
    imageUrl = "imageUrl",
    bannerLink = "bannerLink",
    createdAt = "createdAt"
}


registerEnumType(BannerScalarFieldEnum, { name: 'BannerScalarFieldEnum', description: undefined })
