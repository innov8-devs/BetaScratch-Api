import { nanoid } from 'nanoid';

export const generateRandomNumbers = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

export const generateRandomString = (): string => nanoid(8);
