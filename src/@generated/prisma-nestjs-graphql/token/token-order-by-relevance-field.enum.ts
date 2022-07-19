import { registerEnumType } from '@nestjs/graphql';

export enum TokenOrderByRelevanceFieldEnum {
    subject = "subject",
    mobileNumber = "mobileNumber",
    email = "email",
    code = "code"
}


registerEnumType(TokenOrderByRelevanceFieldEnum, { name: 'TokenOrderByRelevanceFieldEnum', description: undefined })
