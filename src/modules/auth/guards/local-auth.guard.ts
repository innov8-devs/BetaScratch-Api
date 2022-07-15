import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { authTypeSetterFn } from 'utils/authType';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    if (!req) return context.switchToHttp().getRequest();
    req.body = ctx.getArgs()['input'];

    if (req.body.isAdmin) authTypeSetterFn(true);
    else authTypeSetterFn(false);

    const body = {
      // TODO here for login with multiple
      // pass: req.body.password,
      // user: req.body.email || req.body.username,

      password: req.body.password,
      phoneNumberOrEmail: req.body.phoneNumberOrEmail || req.body.username,
      // isAdmin: req.body.isAdmin,
    };

    req.body = body;
    return req;
  }
}
