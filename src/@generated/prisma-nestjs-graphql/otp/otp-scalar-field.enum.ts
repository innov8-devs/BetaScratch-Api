import { registerEnumType } from '@nestjs/graphql';

export enum OtpScalarFieldEnum {
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


registerEnumType(OtpScalarFieldEnum, { name: 'OtpScalarFieldEnum', description: undefined })
