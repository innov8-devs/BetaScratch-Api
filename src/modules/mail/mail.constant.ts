export const MAIL_SUBJECT = {
  VERIFY_ACCOUNT: 'Verify your account',
  REGISTER: 'Welcome to BetaScratch',
  FORGOT_PASSWORD: 'Reset your password',
  REQUEST_WITHDRAWAL: 'Withdrawal Request',
};

export const MAIL_MESSAGE = {
  REGISTER: (token: string) =>
    `Welcome to BetaScratch, Click the link to confirm your account ${token}. Do not share this link with anyone, expires in 15 minutes`,

  FORGOT_PASSWORD: (otp: string) => `Use the otp ${otp} to reset your password`,

  VERIFY_ACCOUNT: (otp: string) =>
    `Your otp code is ${otp}. to verify your account, expires in 15 minutes`,

  REQUEST_WITHDRAWAL: (otp: string) =>
    `Your otp code is ${otp}. Do not share this code with anyone, expires in 15 minutes`,
};
