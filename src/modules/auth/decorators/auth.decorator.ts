import { Roles } from './roles.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';

export const Auth = (roles?: ROLE[]) => {
  if (!roles?.length) return applyDecorators(UseGuards(GqlAuthGuard));
  return applyDecorators(Roles(...roles), UseGuards(GqlAuthGuard, RolesGuard));
};
