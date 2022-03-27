import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    if (!req) return context.switchToHttp().getRequest();
    req.body = ctx.getArgs()['input'];

    const body = {
      // TODO here for login with multiple
      // pass: req.body.password,
      // user: req.body.email || req.body.username,

      password: req.body.password,
      username: req.body.username,
    };

    req.body = body;
    return req;
  }
}
