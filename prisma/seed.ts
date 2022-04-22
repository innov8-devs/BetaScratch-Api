import { PrismaClient } from '@prisma/client';
import { gamesData } from '../src/data/games';

// import * as argon2 from 'argon2';
// import { generateRandomString } from '../src/utils/generateRandomString.util';
const prisma = new PrismaClient();

export const seedDb = async () => {
  // seed admin user
  // const hashedPassword = await argon2.hash('password');
  // await prisma.user.create({
  //   data: {
  //     dateOfBirth: new Date(),
  //     email: 'admin@beta.com',
  //     firstName: 'Admin',
  //     gender: 'MALE',
  //     lastName: 'Beta',
  //     mobileNumber: '+234081590886130',
  //     password: hashedPassword,
  //     state: 'Lagos',
  //     country: 'Nigeria',
  //     username: 'betadmin',
  //     confirmed: true,
  //     role: ROLE.ADMIN,
  //   },
  // });

  // seed game cards
  await prisma.game.createMany({
    data: gamesData,
  });
};

seedDb()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
