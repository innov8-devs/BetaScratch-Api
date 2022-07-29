import { registerEnumType } from '@nestjs/graphql';

export enum BannerOrderByRelevanceFieldEnum {
    imageUrl = "imageUrl",
    url = "url"
}


registerEnumType(BannerOrderByRelevanceFieldEnum, { name: 'BannerOrderByRelevanceFieldEnum', description: undefined })
