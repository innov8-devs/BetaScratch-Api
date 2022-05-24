export const generateRandomNumbers = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

import { v4 } from 'uuid';

export const generateRandomString = (): string => {
  let hexString = v4();
  hexString = hexString.replace(/-/g, '');
  let base64String = Buffer.from(hexString, 'hex').toString('base64');
  return base64String;
};
