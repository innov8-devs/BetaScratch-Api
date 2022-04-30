import { ROLES_KEY } from 'types/constants';
import { SetMetadata } from '@nestjs/common';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';

export const Roles = (...roles: ROLE[]) => SetMetadata(ROLES_KEY, roles);
