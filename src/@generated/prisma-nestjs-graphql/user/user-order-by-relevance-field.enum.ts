import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    email = "email",
    username = "username",
    firstName = "firstName",
    lastName = "lastName",
    mobileNumber = "mobileNumber",
    state = "state",
    country = "country",
    password = "password",
    licenseFrontImage = "licenseFrontImage",
    licenseBackImage = "licenseBackImage",
    licenseNumber = "licenseNumber",
    verificationType = "verificationType",
    verificationStatus = "verificationStatus"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
