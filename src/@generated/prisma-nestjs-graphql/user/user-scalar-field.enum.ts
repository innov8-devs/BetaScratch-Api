import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    firstName = "firstName",
    lastName = "lastName",
    dateOfBirth = "dateOfBirth",
    role = "role",
    gender = "gender",
    mobileNumber = "mobileNumber",
    state = "state",
    confirmed = "confirmed",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
