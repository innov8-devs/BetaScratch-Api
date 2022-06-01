import { ROLE } from '@generated/prisma-nestjs-graphql/prisma/role.enum';
import { BadRequestException, Injectable } from '@nestjs/common';
import { GENDER } from '@prisma/client';
import { MESSAGES } from 'core/messages';
import { MAIL_MESSAGE, MAIL_SUBJECT } from 'modules/mail/mail.constant';
import { MailService } from 'modules/mail/mail.service';
import { PrismaService } from 'modules/prisma.service';
import { TokenService } from 'modules/token/token.service';
import {
  COUNTRY,
  PAYMENT_PURPOSE,
  PAYMENT_STATUS,
  TRANSACTION,
} from 'types/constants/enum';
import { generateRandomString } from 'utils/generateRandomString.util';
import * as argon2 from 'argon2';
import {
  GetUsersFromAdminInput,
  RegisterAdminInput,
} from './dto/admin.request';
import { v4 } from 'uuid';
import { User } from '@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly tokenService: TokenService,
  ) {}

  // Get current logged in user
  async meAdmin(user: User): Promise<User> {
    return await this.prismaService.user.findUnique({
      where: { id: user.id },
    });
  }

  public async getDashboardData() {
    let tabs = [];
    // let purchasedToday = [];
    let cumulativeRevenueToday = 0;
    let totalFlutterRevenue = 0;
    const currentDate = new Date().getDate();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const totalUserCount = await this.prismaService.user.count();
    const totalWithdrawalCount = await this.prismaService.transaction.count({
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
    const totalPurchases = await this.prismaService.transaction.count({
      where: {
        purpose: PAYMENT_PURPOSE.CART,
      },
    });
    const totalCardsPurchased = await this.prismaService.cart.count({});
    const totalFlutterTransactions =
      await this.prismaService.transaction.findMany({
        where: { type: TRANSACTION.FLUTTERWAVE },
      });
    for (let transacton of totalFlutterTransactions) {
      totalFlutterRevenue += transacton.amount;
    }

    const registeredToday = await this.prismaService.user.count({
      where: {
        AND: [
          {
            createdAt: {
              in: new Date(
                `${currentYear}-${currentMonth}-${currentDate}`,
              ).toISOString(),
            },
          },
        ],
      },
    });

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
              in: new Date(
                `${currentYear}-${currentMonth}-${currentDate}`,
              ).toISOString(),
            },
          },
        ],
      },
    });
    for (let revenue of totalRevenueToday) {
      cumulativeRevenueToday += revenue.amount;
    }

    tabs.push(
      {
        title: 'players',
        value: totalUserCount,
      },
      {
        title: 'withdraw',
        value: totalWithdrawalCount,
      },
      {
        title: 'purchase',
        value: totalPurchases,
      },
      {
        title: 'cards',
        value: totalCardsPurchased,
      },
      {
        title: 'revenue',
        value: totalFlutterRevenue,
      },
      {
        title: 'registeredToday',
        value: registeredToday,
      },
      {
        title: 'revenueToday',
        value: cumulativeRevenueToday,
      },
    );

    return true;
  }

  public async createNewAdmin(input: RegisterAdminInput) {
    const emailUsed = await this.prismaService.user.findUnique({
      where: { email: input.email.toLowerCase() },
    });
    const mobileNumberUsed = await this.prismaService.user.findUnique({
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
    const newAdmin = await this.prismaService.user.create({
      data: {
        ...input,
        email: input.email.toLowerCase(),
        password: dummyPass,
        country: COUNTRY.NIGERIA,
        dateOfBirth: new Date(),
        gender: GENDER.MALE,
        state: 'Lagos',
        username: generateRandomString(),
        confirmed: true,
      },
    });

    const adminToken = await this.tokenService.createAuthToken(
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
      await this.prismaService.user.delete({
        where: { email: adminToken.email },
      });
      return false;
    }
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
    const updatedAdmin = await this.prismaService.user.update({
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
      include: { transactions: true, purchases: true },
    });
  }
}
