import { registerEnumType } from '@nestjs/graphql';

export enum CouponOrderByRelevanceFieldEnum {
    status = "status",
    code = "code"
}


registerEnumType(CouponOrderByRelevanceFieldEnum, { name: 'CouponOrderByRelevanceFieldEnum', description: undefined })
