export const generateRandomNumbers = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

import { v4 } from 'uuid';

export const generateRandomString = (): string => v4();
