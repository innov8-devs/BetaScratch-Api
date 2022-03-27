import { CURRENCY, PrismaClient, ROLE } from '@prisma/client';

import * as argon2 from 'argon2';
import { generateRandomString } from '../src/utils/generateRandomString.util';
const prisma = new PrismaClient();

export const seedDb = async () => {
  // seed admin user
  const hashedPassword = await argon2.hash('password');
  await prisma.user.create({
    data: {
      dateOfBirth: new Date(),
      email: 'admin@beta.com',
      firstName: 'Admin',
      gender: 'MALE',
      lastName: 'Beta',
      mobileNumber: '+234081590886130',
      password: hashedPassword,
      state: 'Lagos',
      username: 'betadmin',
      confirmed: true,
      role: ROLE.ADMIN,
    },
  });

  // seed game cards
  await prisma.game.createMany({
    data: [
      {
        availability: 10,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch only TWO (2) Christmas tree ball & win any amount you find! You can win 100k, 10k, 20k, 15k, 150k, 500k, 5k, 50k, and you can also find MERRY CHRISTMAS.',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/seasons-greetings-selar.co-61c6e6f8880bf.png',
        name: 'Seasons Greetings',
        price: 15,
      },
      {
        availability: 11,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Gift Yourself The latest Phone, 100K shopping voucher, dinner dates, holiday getaways, airtime and lots more experiences. Scratch 5 and if 4 gifts match YOU WIN YOURSELF THAT SPECIAL GIFT.',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2022/products/Betascratch/beta-gift-card-selar.co-620fb8ae91556.jpg',
        name: 'Beta Gift Card',
        price: 10,
      },
      {
        availability: 12,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch 4 gifts, win the matched gifts. You can win a TRIP ABROAD, $1,000 Cash, 100k Shopping Voucher, Celebrity Hangout, Weekend Getaway, Events Ticket for 2 and lots more.',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2022/products/Betascratch/beta-gift-card-selar.co-620fb8ae91556.jpg',
        name: 'DETTY DECEMBER',
        price: 20,
      },
      {
        availability: 13,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch Only One Coin, Win Any Amount You Find In The Coin. *All coins have money inside and you can win 3M INSTANTLY, if you scratch the box with 3M inside. Every Card Has 3M inside, Aim to find it and win it instantly.',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/millionaires-club-selar.co-61c300a2670b6.JPG',
        name: 'Millionaires Club',
        price: 50,
      },
      {
        availability: 14,
        defaultCurrrency: CURRENCY.USD,
        description:
          "Scratch all the trophies to reveal all the winning numbers. Scratch only four(4) players' faces to reveal your numbers. if all your numbers match all the winning numbers you win #1,000,000! If you find three(3) you win #50,000. If you find two(2) you win #5,000.",
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/sure-banker-selar.co-61c6e78c611ef.png',
        name: 'Millionaires Club',
        price: 10,
      },
      {
        availability: 15,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch only TWO (2) box to reveal the ball, if you find the ball you win #50,000 instantly!',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/find-the-ball-selar.co-61c6e6c48ae82.png',
        name: 'Find The Ball',
        price: 20,
      },
      {
        availability: 16,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch only 4 circles to match the jackpot number, If they match you win #500,000 instantly! If you find any of the jackpot numbers you win the amount attached.',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/jackpot-selar.co-61c6e682cea57.png',
        name: 'Jackpot',
        price: 20,
      },
      {
        availability: 17,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch only 4 cards, if you match 4 identical cards you win #50,000, If you match 3 identical cards you win #5,000, If you find a jackpot card you win #5,000,000 instantly!',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/golden-jackpot-selar.co-61c6e7e18442a.png',
        name: 'Golden Jackpot',
        price: 10,
      },
      {
        availability: 18,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch only Five(5) circles to reveal gadgets, If you have four matching gadgets you win the gadget! You Can Win An Iphone, Laptop, Television, Airpods, Game.',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/gadget-hunt-selar.co-61c6e815c6eaa.png',
        name: 'Gadget Hunt',
        price: 15,
      },
      {
        availability: 19,
        defaultCurrrency: CURRENCY.USD,
        description:
          'Scratch only 3 balls to reveal the football clubs. If the 3 matches, win 100k! If 2 matches, you win 5k!',
        gameId: generateRandomString(),
        imageUrl:
          'https://files.selar.co/product-images/2021/products/Scratch9ja/football-club-search-selar.co-61c6e85feb225.png',
        name: 'Football Club Search',
        price: 5,
      },
    ],
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
