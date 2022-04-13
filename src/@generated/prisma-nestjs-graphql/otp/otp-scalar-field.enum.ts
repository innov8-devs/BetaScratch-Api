import { registerEnumType } from '@nestjs/graphql';

export enum OtpScalarFieldEnum {
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


registerEnumType(OtpScalarFieldEnum, { name: 'OtpScalarFieldEnum', description: undefined })
