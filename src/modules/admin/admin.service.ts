import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { MailService } from 'modules/mail/mail.service';
import { PrismaService } from 'modules/prisma.service';
import { TokenService } from 'modules/token/token.service';
import {
  DB_TYPES,
  GAME_STATUS,
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
  WALLET_TYPE,
} from 'types/constants/enum';
import * as argon2 from 'argon2';
import {
  ChangeVerificationRequestInput,
  EditUserPurchasesFromAdminInput,
  GetGamesFromAdminInput,
  GetPendingVerificationsFromAdminInput,
  GetUserPurchasesFromAdminInput,
  GetUsersCountInput,
  GetUsersFromAdminInput,
  GetWalletsFromAdminInput,
  GetWithdrawlistFromAdminInput,
  PaginationInput,
  RegisterAdminInput,
  UpdateUserWalletInput,
} from './dto/admin.request';
import { v4 } from 'uuid';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';
import { Wallet } from '@generated/prisma-nestjs-graphql/wallet/wallet.model';
import { Admin } from '@generated/prisma-nestjs-graphql/admin/admin.model';
import { Game } from '@generated/prisma-nestjs-graphql/game/game.model';
import { Purchase } from '@generated/prisma-nestjs-graphql/purchase/purchase.model';
import { WithdrawalRequest } from '@generated/prisma-nestjs-graphql/withdrawal-request/withdrawal-request.model';
import { DashboardDataResponse } from './dto/admin.response';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly tokenService: TokenService,
  ) {}

  // Get current logged in user
  async meAdmin(admin: User): Promise<Admin> {
    return await this.prismaService.admin.findUnique({
      where: { id: admin.id },
    });
  }

  public async getDashboardData(): Promise<DashboardDataResponse> {
    let tabs = [];
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const todaysDate = `${currentYear}-${currentMonth}-${currentDate}`;

    // total list of registered users
    const playersCount = await this.prismaService.user.count();
    tabs.push({ title: 'players', value: playersCount });

    // total withdraw by players
    const totalWithdrawalCount = await this.prismaService.transaction.findMany({
      where: {
        AND: [
          {
            purpose: { equals: TRANSACTION.WITHDRAWAL },
          },
          {
            status: { equals: PAYMENT_STATUS.SUCCESSFUL },
          },
        ],
      },
    });
    let cumulativeWithdrawal = 0;
    for(let withdraw of totalWithdrawalCount){
      cumulativeWithdrawal += withdraw.amount
    }
    tabs.push({ title: 'withdraw', value: cumulativeWithdrawal});

    // total purchases
    const totalPurchases = await this.prismaService.transaction.count({
      where: {
        purpose: PAYMENT_PURPOSE.CART,
      },
    });
    tabs.push({ title: 'purchase', value: totalPurchases });

    //total revenue using flutterwave
    let totalFlutterRevenue = 0;
    const totalFlutterTransactions =
      await this.prismaService.transaction.findMany({
        where: { type: TRANSACTION.FLUTTERWAVE },
      });
    for (let transacton of totalFlutterTransactions) {
      totalFlutterRevenue += transacton.amount;
    }
    tabs.push({ title: 'revenue', value: totalFlutterRevenue });

    // registered today
    const registeredToday = await this.prismaService.user.count({
      where: {
        createdAt: {
          gte: new Date(todaysDate).toISOString(),
        },
      },
    });
    tabs.push({ title: 'registeredToday', value: registeredToday });

    // total revenue today
    const totalRevenueToday = await this.prismaService.transaction.findMany({
      where: {
        OR: [
          {
            type: { equals: TRANSACTION.FLUTTERWAVE },
          },
          {
            type: { equals: TRANSACTION.ACCOUNT },
          },
        ],
        AND: [
          { purpose: { equals: PAYMENT_PURPOSE.CART } },
          {
            status: { equals: PAYMENT_STATUS.SUCCESSFUL },
          },
          {
            createdAt: {
              gte: new Date(todaysDate).toISOString(),
            },
          },
        ],
      },
    });
    let cumulativeRevenueToday = 0;
    for (let revenue of totalRevenueToday) {
      cumulativeRevenueToday += revenue.amount;
    }
    tabs.push({ title: 'revenueToday', value: cumulativeRevenueToday });

    // total cards purchased
    const cardsPurchased = await this.prismaService.cart.count()
    tabs.push({ title: 'cardsPurchased', value: cardsPurchased});

    // total cards purchased today
    const purchasedToday = await this.prismaService.cart.count({
      where:{
        createdAt:{
          gte: new Date(todaysDate).toISOString(),
        }
      }
    })
    tabs.push({ title: 'purcahsedToday', value: purchasedToday});


    return {
      data: {
        tabs,
      },
    };
  }

  public async createNewAdmin(input: RegisterAdminInput) {
    const emailUsed = await this.prismaService.admin.findUnique({
      where: { email: input.email.toLowerCase() },
    });
    const mobileNumberUsed = await this.prismaService.admin.findUnique({
      where: { mobileNumber: input.mobileNumber },
    });
    if (emailUsed) {
      throw new BadRequestException({
        name: 'email',
        message: MESSAGES.AUTH.EMAIL_CONFLICT,
      });
    }
    if (mobileNumberUsed) {
      throw new BadRequestException({
        name: 'mobile',
        message: MESSAGES.AUTH.MOBILE_NUMBER_CONFLICT,
      });
    }
    if (input.role === ROLE.USER) {
      throw new BadRequestException({
        name: 'admin',
        message: MESSAGES.AUTH.INVALID_ADMIN,
      });
    }

    const dummyPass = await argon2.hash(v4());
    const newAdmin = await this.prismaService.admin.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        mobileNumber: input.mobileNumber,
        role: input.role,
        email: input.email.toLowerCase(),
        password: dummyPass,
      },
    });

    const adminToken = await this.tokenService.createAdminAuthToken(
      newAdmin,
      'verify admin',
    );

    await this.mailService.sendMail({
      subject: MAIL_SUBJECT.ADMIN_NEW,
      html: MAIL_MESSAGE.ADMIN_NEW(
        `${process.env.BETA_ADMIN}/register?token=${adminToken.code}&type=new_admin`,
      ),
      to: newAdmin.email,
    });

    return true;
  }

  public async confirmAdminToken(token: string) {
    const adminToken = await this.tokenService.findOne({ code: token });
    if (!adminToken) return false;
    const tokenIsValid = await this.tokenService.checkTokenValidity({
      token: adminToken.code,
      mobileNumber: adminToken.mobileNumber,
    });
    if (!tokenIsValid) {
      await this.prismaService.admin.delete({
        where: { email: adminToken.email },
      });
      return false;
    }
    await this.prismaService.admin.update({
      where: { email: adminToken.email },
      data: { confirmed: true },
    });
    return true;
  }

  public async resetNewAdminPassword(password: string, token: string) {
    const adminToken = await this.tokenService.findOne({ code: token });
    if (!adminToken) {
      throw new BadRequestException({
        name: 'token',
        message: MESSAGES.AUTH.INVALID_TOKEN,
      });
    }
    const tokenIsValid = await this.tokenService.checkTokenValidity({
      token: adminToken.code,
      mobileNumber: adminToken.mobileNumber,
    });
    if (!adminToken || !tokenIsValid) {
      throw new BadRequestException({
        name: 'token',
        message: MESSAGES.AUTH.INVALID_TOKEN,
      });
    }
    const hashedPassword = await argon2.hash(password);
    const updatedAdmin = await this.prismaService.admin.update({
      where: { email: adminToken.email },
      data: { password: hashedPassword },
    });

    await this.tokenService.validateToken({
      mobileNumber: updatedAdmin.mobileNumber,
      token: adminToken.code,
    });

    return true;
  }

  public async getUsersFromAdmin(input: GetUsersFromAdminInput) {
    const { orderBy, orderColumn, page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.user.findMany({
      where: { role: ROLE.USER },
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
      include: { wallet: true },
    });
  }

  public async getOneUserFromAdmin(userId: number): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { id: userId },
      include: {
        transactions: {
          take: 20,
        },
        purchases: {
          take: 20,
        },
      },
    });
  }

  public async getWalletsFromAdmin(
    input: GetWalletsFromAdminInput,
  ): Promise<Wallet[]> {
    const { page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.wallet.findMany({
      include: { user: true },
      take: size,
      skip: skipValue,
    });
  }

  public async getOneWalletFromAdmin(walletId: number): Promise<Wallet> {
    return await this.prismaService.wallet.findUnique({
      where: { userId: walletId },
      include: { user: true },
    });
  }

  public async getGamesFromAdmin(
    input: GetGamesFromAdminInput,
  ): Promise<Game[]> {
    const { orderBy, orderColumn, page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.game.findMany({
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
    });
  }

  public async getOneGameFromAdmin(gameId: number): Promise<Game> {
    return await this.prismaService.game.findUnique({
      where: { id: gameId },
    });
  }

  public async getUserPurchasesFromAdmin(
    input: GetUserPurchasesFromAdminInput,
  ): Promise<Purchase[]> {
    const { orderBy, orderColumn, page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.purchase.findMany({
      include: { cards: true },
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
    });
  }

  public async editUserPurchaseStatusFromAdmin(
    input: EditUserPurchasesFromAdminInput,
  ) {
    const { purchaseId, ...rest } = input;
    return await this.prismaService.purchase.update({
      where: { id: input.purchaseId },
      data: rest,
      include: { cards: true },
    });
  }

  public async updateUserWallet(input: UpdateUserWalletInput): Promise<Wallet> {
    if (input.type === WALLET_TYPE.ACCOUNT) {
      return await this.prismaService.wallet.update({
        where: { userId: input.userId },
        data: { withdrawable: { increment: input.amount } },
        include: { user: true },
      });
    } else if (input.type === WALLET_TYPE.BONUS) {
      return await this.prismaService.wallet.update({
        where: { userId: input.userId },
        data: { bonus: { increment: input.amount } },
        include: { user: true },
      });
    } else {
      throw new BadRequestException({
        name: 'wallet',
        message: 'unknown wallet',
      });
    }
  }

  public async getCount(input: GetUsersCountInput): Promise<Number> {
    if (input.field === DB_TYPES.GAME) {
      return await this.prismaService.game.count({});
    } else if (input.field === DB_TYPES.USER) {
      return await this.prismaService.user.count();
    } else if (input.field === DB_TYPES.ADMIN) {
      return await this.prismaService.admin.count();
    } else if (input.field === DB_TYPES.TRANSACTION) {
      return await this.prismaService.transaction.count();
    } else if (input.field === DB_TYPES.PURCHASE) {
      return await this.prismaService.purchase.count();
    }
    return 0;
  }

  public async getWithdrawaListFromAdmin(
    input: GetWithdrawlistFromAdminInput,
  ): Promise<WithdrawalRequest[]> {
    const { orderBy, orderColumn, page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.withdrawalRequest.findMany({
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
      include: { user: true },
    });
  }

  public async getPendingVerificationsFromAdmin(
    input: GetPendingVerificationsFromAdminInput,
  ) {
    const { orderBy, orderColumn, page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.user.findMany({
      where: { verificationStatus: 'pending' },
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
      include: { withdrawalRequest: true },
    });
  }

  async changeVerificationStatus(input: ChangeVerificationRequestInput) {
    const { id, page, size, status, orderBy, orderColumn } = input;
    const withdrawal = await this.prismaService.withdrawalRequest.findUnique({
      where: { id },
    });
    if (status === 'approved' || status === 'active') {
      await this.prismaService.user.update({
        where: { id: withdrawal.userId },
        data: { verificationStatus: 'active' },
      });
    } else {
      await this.prismaService.user.update({
        where: { id: withdrawal.userId },
        data: { verificationStatus: 'inactive' },
      });
    }
    let skipValue = page * size - size;
    return await this.prismaService.user.findMany({
      where: { verificationStatus: 'pending' },
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
      include: { withdrawalRequest: true },
    });
  }

  async getAdminList(input: PaginationInput) {
    const { orderBy, orderColumn, page, size } = input;
    let skipValue = page * size - size;
    return await this.prismaService.admin.findMany({
      orderBy: {
        [orderColumn]: orderBy,
      },
      take: size,
      skip: skipValue,
    });
  }

  async toggleGameStatus(id: number, status: GAME_STATUS){
    await this.prismaService.game.update({
      where: { id },
      data: {status}
    })
  }

  async toggleCardPlayedStatus(id: number, played: boolean){
    await this.prismaService.cart.update({
      where: { id },
      data: {played}
    })
  }
}
