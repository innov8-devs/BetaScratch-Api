import { registerEnumType } from '@nestjs/graphql';

export enum CouponOrderByRelevanceFieldEnum {
    code = "code"
}


registerEnumType(CouponOrderByRelevanceFieldEnum, { name: 'CouponOrderByRelevanceFieldEnum', description: undefined })
