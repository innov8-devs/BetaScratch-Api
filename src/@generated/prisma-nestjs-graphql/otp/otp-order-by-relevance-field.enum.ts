import { registerEnumType } from '@nestjs/graphql';

export enum OtpOrderByRelevanceFieldEnum {
    subject = "subject",
    mobileNumber = "mobileNumber",
    email = "email",
    code = "code"
}


registerEnumType(OtpOrderByRelevanceFieldEnum, { name: 'OtpOrderByRelevanceFieldEnum', description: undefined })
