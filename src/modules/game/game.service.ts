import { Injectable } from '@nestjs/common';
import { Game } from '../../@generated/prisma-nestjs-graphql/game/game.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllGames(): Promise<Game[]> {
    return await this.prisma.game.findMany();
  }
}
