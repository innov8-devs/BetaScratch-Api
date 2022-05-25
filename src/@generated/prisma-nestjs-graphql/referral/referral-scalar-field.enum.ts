import { registerEnumType } from '@nestjs/graphql';

export enum ReferralScalarFieldEnum {
    id = "id",
    referrals = "referrals",
    userId = "userId",
    invitesFunded = "invitesFunded",
    totalEarned = "totalEarned",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReferralScalarFieldEnum, { name: 'ReferralScalarFieldEnum', description: undefined })
