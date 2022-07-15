import { registerEnumType } from '@nestjs/graphql';

export enum AdminScalarFieldEnum {
    id = "id",
    email = "email",
    firstName = "firstName",
    lastName = "lastName",
    role = "role",
    mobileNumber = "mobileNumber",
    confirmed = "confirmed",
    username = "username",
    password = "password",
    createdAt = "createdAt"
}


registerEnumType(AdminScalarFieldEnum, { name: 'AdminScalarFieldEnum', description: undefined })
