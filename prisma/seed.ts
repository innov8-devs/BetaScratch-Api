import { PrismaClient } from '@prisma/client';
// import { gamesData } from '../src/data/games';

import * as argon2 from 'argon2';
// import { ROLE } from '../src/types/constants/enum';
// import { generateRandomString } from '../src/utils/generateRandomString.util';
const prisma = new PrismaClient();

export const seedDb = async () => {
  const hashedPassword = await argon2.hash('Ops2021Dev@@1999@');
  await prisma.admin.create({
    data: {
      email: 'dev@betascratch.com',
      firstName: 'Beta',
      lastName: 'Admin',
      mobileNumber: '+2347039708172',
      password: hashedPassword,
      role: 'ADMIN',
      username: 'devops2021@',
      confirmed: true,
    },
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
