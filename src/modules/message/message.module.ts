import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { PrismaService } from 'modules/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'modules/auth/auth.module';
import { AuthService } from 'modules/auth/auth.service';

@Module({
  imports: [JwtModule.register({}), AuthModule],
  providers: [MessageResolver, MessageService, PrismaService, AuthService],
  exports: [MessageService],
})
export class MessageModule {}
