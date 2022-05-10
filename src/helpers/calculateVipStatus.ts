export const calculateVipStatus = (amount: number) => {
  if (amount > 500 && amount <= 20000) return 16;
  else if (amount > 20000 && amount <= 50000) return 32;
  else if (amount > 50000 && amount <= 100000) return 48;
  else if (amount > 100000 && amount <= 500000) return 64;
  else if (amount > 500000 && amount <= 1000000) return 80;
  else if (amount > 1000000) return 100;
  else return 0;
};
