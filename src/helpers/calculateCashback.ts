export const calculateCashback = (amount: number) => {
  let cashbackAmount: number;

  if (amount >= 500 && amount < 2000) {
    cashbackAmount = (amount * 5) / 100;
  } else if (amount >= 2000 && amount < 5000) {
    cashbackAmount = (amount * 7) / 100;
  } else if (amount >= 5000 && amount < 10000) {
    cashbackAmount = (amount * 10) / 100;
  } else if (amount >= 10000 && amount < 100000) {
    cashbackAmount = (amount * 15) / 100;
  } else cashbackAmount = 0;

  return cashbackAmount;
};
