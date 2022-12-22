import { registerEnumType } from '@nestjs/graphql';

export enum CouponOrderByRelevanceFieldEnum {
    status = "status",
    code = "code",
    expires = "expires"
}


registerEnumType(CouponOrderByRelevanceFieldEnum, { name: 'CouponOrderByRelevanceFieldEnum', description: undefined })
