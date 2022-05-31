import { registerEnumType } from '@nestjs/graphql';

export enum TokenScalarFieldEnum {
    id = "id",
    subject = "subject",
    expire = "expire",
    validity = "validity",
    mobileNumber = "mobileNumber",
    email = "email",
    code = "code",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    adminId = "adminId"
}


registerEnumType(TokenScalarFieldEnum, { name: 'TokenScalarFieldEnum', description: undefined })
