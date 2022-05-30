import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'modules/prisma.service';
import { TokenService } from './token.service';

@Global()
@Module({
  providers: [TokenService, PrismaService],
})
export class TokenModule {}
