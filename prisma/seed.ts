import { PrismaClient } from '@prisma/client';
// import { gamesData } from '../src/data/games';

// import * as argon2 from 'argon2';
// import { ROLE } from '../src/types/constants/enum';
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

  let categoryData = [
    { categoryLabel: 'Trending', categoryName: 'Trending' },
    { categoryLabel: 'Sports', categoryName: 'Sports' },
    { categoryLabel: 'Fast cash', categoryName: 'Fast cash' },
    { categoryLabel: 'Millionaire', categoryName: 'Millionaire' },
    { categoryLabel: 'Adventure', categoryName: 'Adventure' },
    { categoryLabel: 'New games', categoryName: 'New games' },
    { categoryLabel: 'New games', categoryName: 'New games' },
  ];

  await prisma.gameCategory.createMany({
    data: categoryData,
  });

  // seed game cards
  // await prisma.game.createMany({
  //   data: gamesData,
  // });
};

seedDb()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
