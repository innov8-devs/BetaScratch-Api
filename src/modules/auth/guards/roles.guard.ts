import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { ROLES_KEY } from 'types/constants';
import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.get<ROLE>(
      ROLES_KEY,
      context.getHandler(),
    );

    if (!requiredRole) return true;
    const ctx = GqlExecutionContext.create(context);
    const user: User | Admin = ctx.getContext().req.user;

    return requiredRole.includes(user.role);
  }
}
