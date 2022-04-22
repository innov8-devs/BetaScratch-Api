import { Module } from '@nestjs/common';
import { TesstService } from './tesst.service';
import { TesstController } from './tesst.controller';

@Module({
  controllers: [TesstController],
  providers: [TesstService]
})
export class TesstModule {}
