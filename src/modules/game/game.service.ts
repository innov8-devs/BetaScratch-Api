import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  CartDetailInput,
  GameCateogorySearch,
  GamePaginationInput,
} from 'modules/user/dto/game.request';
import { Game } from '../../@generated/prisma-nestjs-graphql/game/game.model';
import { PrismaService } from '../prisma.service';
import { GameCategoryReturnType } from './dto/game.response';

@Injectable()
export class GameService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneGame(input: Prisma.GameWhereUniqueInput): Promise<Game> {
    return await this.prismaService.game.findUnique({
      where: input,
    });
  }

  async editGame(gameId: number, input: Prisma.GameUpdateInput) {
    await this.prismaService.game.update({
      where: {
        id: gameId,
      },
      data: {
        ...input,
      },
    });
    return true;
  }

  async findAllGames(): Promise<Game[]> {
    return await this.prismaService.game.findMany();
  }

  async findAllGamesByCategories(input: GameCateogorySearch) {
    const { page, size } = input;
    let skipValue = Number(page + '0');
    let gamesData: GameCategoryReturnType[] = [];
    for (let category of input.categories) {
      let games = await this.prismaService.game.findMany({
        where: {
          category: {
            equals: category,
          },
        },
        take: size,
        skip: skipValue,
      });
      let singleGame = { name: category, games: [...games] };
      gamesData = [...gamesData, singleGame];
    }
    return gamesData;
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

  async createGameCategory(input: Prisma.GameCategoryCreateInput) {
    return await this.prismaService.gameCategory.create({
      data: {
        ...input,
      },
    });
  }

  async findAllGameCategories() {
    return await this.prismaService.gameCategory.findMany();
  }

  async getAllCartDetails(input: CartDetailInput) {
    return await this.prismaService.game.findMany({
      where: {
        id: { in: input.gameIds },
      },
    });
  }
}
