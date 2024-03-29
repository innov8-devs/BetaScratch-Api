export enum ERROR_FIELD {
  EMAIL = 'email',
  NAME = 'name',
  PASSWORD = 'password',
}

const AUTH = {
  EMAIL_CONFLICT: 'email address is already registered',
  USERNAME_CONFLICT: 'username is taken',
  MOBILE_NUMBER_CONFLICT: 'mobile number has been taken',
  WRONG_MOBILE_NUMBER_FORMAT: 'wrong mobile number format',
  SHORT_PASSWORD: 'password must be greater than 6 letters',
  INVALID_TOKEN: 'invalid token',
  INVALID_ADMIN: 'invalid admin type',
  TOKEN_NOT_FOUND: 'token does not exist',
  USER_NOT_FOUND: 'user not found',
  UNAUTHORIZED: 'unauthorized user',
  CONFIRM_ACCOUNT: 'confirm account',
  MISSING_FIELDS: 'missing required fields',
  OTP_SENT: 'the otp has already been sent',
  INVALID_OTP: 'the provided otp is invalid',
  EXPIRED_OTP: 'the provided otp has expired',
  INVALID_CREDENTIALS: 'invalid credentials',
  INVALID_PIN: 'the provided pin is incorrect',
  PIN_MISMATCH: 'the provided pins do not match',
  INVALID_PASSWORD: 'the provided password is incorrect',
  PASSWORD_MISMATCH: 'the provided passwords do not match',
  PIN_ALREADY_CREATED: 'pin already created. Please login',
  EMAIL_DOES_NOT_EXIST: 'the provided email is not registered',
  PHONE_DOES_NOT_EXIST: 'the provided phone number does not exist',
  PHONE_ALREADY_EXIST: 'the provided phone number already exist',
  VALIDATE_PHONE: 'please validate your phone number and try again',
  PHONE_VALIDATED: 'the provided account has already been validated',
  CREATE_NEW_PIN: 'you must create a pin before accessing your account',
  CREATE_PASSWORD: 'you must set a password before accessing your account',
  PHONE_NUMBER_CONFLICT: 'the provided phone number is already registered',
};

const USER = {
  SHORT_NAME: 'must be greater than 2',
  INVALID_ACCOUNT: 'confirm your account',
  INSUFFICIENT_WALLET_FUND: 'insufficient fund in wallet',
  INVALID_TIP: 'cannot tip yourself',
};

const ACCOUNT = {
  DISABLED: 'account disabled, contact customer service.',
};

const COUPON = {
  UNABLE_TO_CREATE: 'unable to create coupon',
  UNABLE_TO_CHECK_VALIDITY: 'unable to check validity',
  UNABLE_TO_INVALIDATE: 'unable to invalidate coupon',
  COUPON_CONFLICT: 'code has been used previously',
  AMOUNT_NEEDED: 'kindly provide the amount',
  PERCENTAGE_NEEDED: 'kindly provide the percentage',
  PERCENTAGE_TOO_HIGH: 'percentage cannot be more than 100',
  PERCENTAGE_CONFLICT: 'cannot provide amount for percentage coupon',
  N0T_FOUND: 'coupon does not exist',
  EXPIRED: 'coupon has expired',
  NOT_AVAILABLE: 'coupon not available',
  AMOUNT_CONFLICT: 'cannot provide percentage for amount coupon',
};

const RAFFLE = {
  UNABLE_TO_UPDATE: 'unable to update raffle',
  UNABLE_TO_FIND: 'unable to find raffle',
  UNABLE_TO_FIND_TICKET: 'unable to find raffle ticket',
  UNABLE_TO_STAKE: 'unable to stake raffle',
};

export const MESSAGES = { AUTH, USER, ACCOUNT, COUPON, RAFFLE };
