import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  GameCateogorySearch,
  GamePaginationInput,
} from 'modules/user/dto/game.request';
import { Game } from '../../@generated/prisma-nestjs-graphql/game/game.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAllGames(): Promise<Game[]> {
    return await this.prismaService.game.findMany();
  }

  async findAllGamesByCategories(input: GameCateogorySearch) {
    let games: Game[] = [];
    for (let category of input.categories) {
      let currGames = await this.prismaService.game.findMany({
        where: {
          category: { equals: category },
        },
      });
      games = [...games, ...currGames];
    }
    return games;
  }

  async createGame(input: Prisma.GameCreateInput) {
    return await this.prismaService.game.create({
      data: {
        ...input,
      },
    });
  }

  async totalGameCount() {
    return await this.prismaService.game.aggregate({
      _count: true,
    });
  }

  async findAllGamesPaginated(input?: GamePaginationInput) {
    const { skip, take } = input;
    return await this.prismaService.game.findMany({
      skip,
      take,
      select: {
        id: true,
        availability: true,
        category: true,
        description: true,
        gameId: true,
        imageUrl: true,
        name: true,
        price: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
