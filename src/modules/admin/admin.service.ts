import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from 'core/messages';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { MailService } from 'modules/mail/mail.service';
import { PrismaService } from 'modules/prisma.service';
import { TokenService } from 'modules/token/token.service';
import {
  CURRENCY,
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
import {
  DashboardDataResponse,
  FlutterTansactionResponse,
  SortReturnData,
} from './dto/admin.response';
import * as Flutterwave from 'flutterwave-node-v3';
import { TransactionService } from 'modules/transaction/transaction.service';
import {
  generateRandomNumbers,
  generateRandomString,
} from 'utils/generateRandomString.util';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly tokenService: TokenService,
    private readonly transactionService: TransactionService,
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
    const totalWithdrawalCount =
      await this.prismaService.withdrawalRequest.findMany({
        where: {
          status: PAYMENT_STATUS.APPROVED.toLowerCase(),
        },
      });
    let cumulativeWithdrawal = 0;
    for (let withdraw of totalWithdrawalCount) {
      cumulativeWithdrawal += Number(withdraw.amount);
    }
    tabs.push({ title: 'withdraw', value: cumulativeWithdrawal });

    // total purchases
    const totalPurchases = await this.prismaService.transaction.count({
      where: {
        purpose: PAYMENT_PURPOSE.CART,
      },
    });
    tabs.push({ title: 'purchase', value: totalPurchases });

    //total revenue using flutterwave
    let revenue = 0;
    const totalTransactions = await this.prismaService.transaction.findMany({
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
        ],
      },
    });
    for (let transacton of totalTransactions) {
      revenue += transacton.amount;
    }
    tabs.push({ title: 'revenue', value: revenue });

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
    const cardsPurchased = await this.prismaService.cart.count();
    tabs.push({ title: 'cardsPurchased', value: cardsPurchased });

    // total cards purchased today
    const purchasedToday = await this.prismaService.cart.count({
      where: {
        createdAt: {
          gte: new Date(todaysDate).toISOString(),
        },
      },
    });

    // total wallet balance
    const walletsBalance = await this.prismaService.wallet.aggregate({
      _sum: { withdrawable: true },
    });
    tabs.push({
      title: 'walletBalance',
      value: walletsBalance._sum.withdrawable,
    });

    return {
      data: {
        tabs,
        purchasedToday,
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
    const usernameUsed = await this.prismaService.admin.findUnique({
      where: { username: input.username },
    });
    if (usernameUsed) {
      throw new BadRequestException({
        name: 'username',
        message: MESSAGES.AUTH.USERNAME_CONFLICT,
      });
    }
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
        username: input.username,
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
    if (orderColumn === 'wallet') {
      return await this.prismaService.user.findMany({
        orderBy: {
          wallet: {
            withdrawable: orderBy,
          },
        },
        take: size,
        skip: skipValue,
        include: { wallet: true },
      });
    }

    return await this.prismaService.user.findMany({
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
        wallet: true,
        purchases: {
          take: 20,
        },
      },
    });
  }

  public async getWalletsFromAdmin(
    input: GetWalletsFromAdminInput,
  ): Promise<Wallet[]> {
    const { page, size, orderColumn, orderBy } = input;
    let skipValue = page * size - size;
    return await this.prismaService.wallet.findMany({
      include: { user: true },
      orderBy: {
        [orderColumn]: orderBy,
      },
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
    if (orderColumn === 'status') {
      return await this.prismaService.purchase.findMany({
        include: { cards: true },
        where: { status: orderBy },
        orderBy: {
          id: 'desc',
        },
        take: size,
        skip: skipValue,
      });
    } else {
      return await this.prismaService.purchase.findMany({
        include: { cards: true },
        orderBy: {
          [orderColumn]: orderBy,
        },
        take: size,
        skip: skipValue,
      });
    }
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
      if (input.amount.toString().includes('-')) {
        await this.transactionService.createTransaction({
          amount: input.amount,
          currency: CURRENCY.NGN,
          purpose: PAYMENT_PURPOSE.DEDUCT_WALLET_BALANCE,
          status: PAYMENT_STATUS.SUCCESSFUL,
          type: TRANSACTION.ACCOUNT,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: input.userId } },
        });
      } else {
        await this.transactionService.createTransaction({
          amount: input.amount,
          currency: CURRENCY.NGN,
          purpose: PAYMENT_PURPOSE.INCREMENT_WALLET_BALANCE,
          status: PAYMENT_STATUS.SUCCESSFUL,
          type: TRANSACTION.ACCOUNT,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: input.userId } },
        });
      }
      return await this.prismaService.wallet.update({
        where: { userId: input.userId },
        data: { withdrawable: { increment: input.amount } },
        include: { user: true },
      });
    } else if (input.type === WALLET_TYPE.BONUS) {
      if (input.amount.toString().includes('-')) {
        await this.transactionService.createTransaction({
          amount: input.amount,
          currency: CURRENCY.NGN,
          purpose: PAYMENT_PURPOSE.DEDUCT_BONUS_BALANCE,
          status: PAYMENT_STATUS.SUCCESSFUL,
          type: TRANSACTION.BONUS,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: input.userId } },
        });
      } else {
        await this.transactionService.createTransaction({
          amount: input.amount,
          currency: CURRENCY.NGN,
          purpose: PAYMENT_PURPOSE.INCREMENT_BONUS_BALANCE,
          status: PAYMENT_STATUS.SUCCESSFUL,
          type: TRANSACTION.BONUS,
          transactionId: generateRandomNumbers(),
          transactionRef: generateRandomString(),
          User: { connect: { id: input.userId } },
        });
      }
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
    } else if (input.field === DB_TYPES.PENDING_WITHDRAWAL_REQUEST) {
      return await this.prismaService.withdrawalRequest.count({
        where: {
          status: 'pending',
        },
      });
    } else if (input.field === DB_TYPES.PENDING_VERIFICATION_REQUEST) {
      return await this.prismaService.user.count({
        where: { verificationStatus: 'pending' },
      });
    }
    return 0;
  }

  public async getWithdrawRequestFromAdmin(
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
    const { id, status } = input;
    if (status === 'active') {
      await this.prismaService.user.update({
        where: { id },
        data: { verificationStatus: status },
      });
    } else {
      await this.prismaService.user.update({
        where: { id },
        data: { verificationStatus: status },
      });
    }
    return true;
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

  async toggleGameStatus(id: number, status: GAME_STATUS) {
    await this.prismaService.game.update({
      where: { id },
      data: { status },
    });
  }

  async toggleCardPlayedStatus(
    id: number,
    played: boolean,
    parentId?: number,
    parentStatus?: string,
  ) {
    if (parentId && parentStatus === 'played') {
      await this.prismaService.purchase.update({
        where: { id: parentId },
        data: { status: parentStatus.toLowerCase() },
      });
    }
    await this.prismaService.cart.update({
      where: { id },
      data: { played },
    });
    if (parentStatus === 'inactive') {
      await this.prismaService.purchase.update({
        where: { id: parentId },
        data: { status: parentStatus },
      });
    }
  }

  async getFlutterwaveTransactions(
    from: string,
    to: string,
  ): Promise<FlutterTansactionResponse[]> {
    console.log(from, to);
    const flw = new Flutterwave(
      process.env.FLUTTERWAVE_PUBLIC_KEY,
      process.env.FLUTTERWAVE_SECRET_KEY,
    );
    try {
      const response = await flw.Transaction.fetch({
        from: '2021-05-01',
        to: '2021-06-01',
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPurchases() {
    const transactions = await this.prismaService.transaction.findMany({
      where: {
        purpose: 'CART',
        type: 'FLUTTERWAVE',
        status: 'PENDING',
      },
    });
    for (let trx of transactions) {
      await this.prismaService.purchase.deleteMany({
        where: {
          AND: [
            { userId: { equals: trx.userId } },
            { reference: { equals: trx.transactionRef } },
          ],
        },
      });
    }
  }

  async updateAdminPersonalInformation(
    firstName: string,
    lastName: string,
    userId: number,
  ): Promise<Boolean> {
    try {
      await this.prismaService.admin.update({
        where: { id: userId },
        data: { firstName, lastName },
      });
      return true;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async updateAdminPassword(
    oldPassword: string,
    newPassword: string,
    userId: number,
  ): Promise<Boolean> {
    try {
      const user = await this.prismaService.user.findUnique({
        where: { id: userId },
      });

      const verifyPassword = await argon2.verify(user.password, oldPassword);

      if (!verifyPassword) {
        throw new BadRequestException({
          name: 'credentials',
          message: MESSAGES.AUTH.INVALID_CREDENTIALS,
        });
      }

      const newPass = await argon2.hash(newPassword);
      await this.prismaService.admin.update({
        where: { id: userId },
        data: { password: newPass },
      });

      return true;
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async toggleUserAccountDisalility(userId: number, disabled: boolean) {
    try {
      await this.prismaService.user.update({
        where: { id: userId },
        data: { disabled },
      });
      return true;
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  async adminSearch(
    table: DB_TYPES,
    search: string,
  ): Promise<[SortReturnData]> {
    const searchQuery = `%${search}%`;
    switch (table) {
      case DB_TYPES.USER:
      case DB_TYPES.WALLET:
      case DB_TYPES.VERIFICATION:
        return await this.prismaService.$queryRaw`
        SELECT "t"."id","t"."email","t"."username","t"."firstName","t"."lastName","t"."dateOfBirth","t"."role","t"."gender","t"."mobileNumber","t"."state","t"."country","t"."confirmed","t"."licenseFrontImage", "t"."licenseBackImage","t"."verificationStatus","t"."createdAt","t"."updatedAt","t"."vipStatus","t"."verificationType","t"."licenseNumber","t"."disabled", to_json("Wallet".*) as wallet from "User" t INNER JOIN "Wallet" on "t"."id" = "Wallet"."userId" WHERE t::text ILIKE ${searchQuery} LIMIT 20`;
      case DB_TYPES.GAME:
        return await this.prismaService.$queryRaw`
            SELECT * FROM "Game" g WHERE g::text ILIKE ${searchQuery} LIMIT 20
          `;
      case DB_TYPES.WITHDRAWAL_REQUEST:
        return await this.prismaService.$queryRaw`
            SELECT "wr"."id", "wr"."bank", "wr"."accountNumber", "wr"."accountName", "wr"."amount", "wr"."status", "wr"."paypal", "wr"."btcWalletAdderess", "wr"."userId", "wr"."createdAt", "wr"."updatedAt", to_json("User".*) as user FROM "WithdrawalRequest" wr INNER JOIN "User" on "wr"."userId" = "User"."id" WHERE wr::text ILIKE ${searchQuery} LIMIT 20 
          `;
      // case DB_TYPES.PURCHASE:
      //   return await this.prismaService.$queryRaw`
      //       SELECT "p"."id", "p"."username", "p"."email", "p"."status", "p"."quantity", "p"."reference", "p"."subtotal", "p"."createdAt", "p"."updatedAt", to_json("Cart".*) as cart FROM "Purchase" p INNER JOIN "Cart" on "p"."reference" = "Cart"."reference" WHERE p::text ILIKE ${searchQuery} LIMIT 20
      //     `;
      case DB_TYPES.PURCHASE:
        `SELECT "p"."id", "p"."username", "p"."email", "p"."status", "p"."quantity", "p"."reference", "p"."subtotal", "p"."createdAt", "p"."updatedAt" FROM "Purchase" p, (
        SELECT to_json(*) FROM "Cart") as cart WHERE "Cart"."reference" = "Purchase"."reference" AND p::text ILIKE ${searchQuery} LIMIT 20`;
      case DB_TYPES.ADMIN:
        return await this.prismaService.$queryRaw`
            SELECT * FROM "Admin" a WHERE a::text ILIKE ${searchQuery} LIMIT 20
          `;
      default:
        break;
    }
  }

  async run() {
    let unverified = await this.prismaService.user.findMany({
      where: { confirmed: false },
    });
    for (let user of unverified) {
      try {
        await this.mailService.sendMail({
          subject: MAIL_SUBJECT.COMPLETE_VERIFICATION,
          html: MAIL_MESSAGE.COMPLETE_VERIFICATION(),
          to: user.email,
        });
        console.log(`sent to ${user.email}`);
      } catch (err) {
        console.log(err);
      }
    }
    return true;
  }
}
