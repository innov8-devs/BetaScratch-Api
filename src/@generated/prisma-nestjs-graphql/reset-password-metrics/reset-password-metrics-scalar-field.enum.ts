import { registerEnumType } from '@nestjs/graphql';

export enum ResetPasswordMetricsScalarFieldEnum {
    id = "id",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(ResetPasswordMetricsScalarFieldEnum, { name: 'ResetPasswordMetricsScalarFieldEnum', description: undefined })
