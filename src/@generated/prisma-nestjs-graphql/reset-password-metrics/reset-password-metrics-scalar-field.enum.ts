import { registerEnumType } from '@nestjs/graphql';

export enum ResetPasswordMetricsScalarFieldEnum {
    id = "id",
    userId = "userId"
}


registerEnumType(ResetPasswordMetricsScalarFieldEnum, { name: 'ResetPasswordMetricsScalarFieldEnum', description: undefined })
