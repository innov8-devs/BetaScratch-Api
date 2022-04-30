import { registerEnumType } from '@nestjs/graphql';

export enum TokenScalarFieldEnum {
    id = "id",
    subject = "subject",
    expire = "expire",
    validity = "validity",
    mobileNumber = "mobileNumber",
    code = "code",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TokenScalarFieldEnum, { name: 'TokenScalarFieldEnum', description: undefined })
