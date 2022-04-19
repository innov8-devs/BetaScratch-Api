import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Game } from '../../@generated/prisma-nestjs-graphql/game/game.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllGames(): Promise<Game[]> {
    return await this.prismaService.game.findMany();
  }

  async createGame(input: Prisma.GameCreateInput) {
    return await this.prismaService.game.create({
      data: {
        ...input,
      },
    });
  }
}
