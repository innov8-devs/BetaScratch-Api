import { registerEnumType } from '@nestjs/graphql';

export enum BannerOrderByRelevanceFieldEnum {
    imageUrl = "imageUrl",
    bannerLink = "bannerLink"
}


registerEnumType(BannerOrderByRelevanceFieldEnum, { name: 'BannerOrderByRelevanceFieldEnum', description: undefined })
