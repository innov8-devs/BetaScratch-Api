export const MAIL_SUBJECT = {
  VERIFY_ACCOUNT: 'Verify your account',
  REGISTER: 'Welcome to BetaScratch',
  FORGOT_PASSWORD: 'Reset your password',
  REQUEST_WITHDRAWAL: 'Withdrawal Request',
  WITHDRAWAL_APPROAL: 'Credit Alert',
  REFERRAL: 'Referral',
};

export const MAIL_MESSAGE = {
  REGISTER: (otp: string) => `
<html>
<body>
  <div style="background-color: #F2F2F2; padding: 7px; margin: 0px;">
    <div style="padding: 0px; margin:0px;">
      <div style="background-color: #F8F9FA; padding: 14px; margin: 0px;">
        <img src='https://betascratch.com/assets/logo_black.png' alt='Betascratch logo'
          style='max-height: 60px; display: block; border-radius: 10px;' />
      </div>
      <div
        style="padding: 14px; margin: 0px; font-size: 15px; color: #2B2F33; line-height: 1.5; border-radius: 0px 0px 10px 10px; border-width: 7px; border-style: solid; border-color: #F8F9FA;">
        <div style="padding-bottom: 36px">
        <p>Thanks for signing up at Betascratch.</p>
        <p>You’re almost there, just the only thing left before you get to the fantastic experience betascratch can offer.</p>
          <p>Use the OTP below to confirm your registration and verify your email address. Once verified feel free to enjoy Betascratch amazing games!</p>
          <h3>${otp}</h3>
          <p>This OTP is valid for only 15 mins. If you require any assistance,
            please contact our Customer Service <a href="">here</a>.
          </p>
          <br><br>
          <p>Thank you for using Betascratch.</p>
        </div>
        <div style="text-align:center; font-size:12px; padding: 16px 22px 0px 22px; border-top: 2px solid #F8F9F2;">
          <div style="display: flex; justify-content: center; margin-bottom: 21px">
            <a href='google.com'><img src='https://betascratch.com/assets/apple.png' alt='Get on AppleStore'
                style='max-height: 40px; display: block; margin-right:1em;' /></a>
            <a href='google.com'><img src='https://betascratch.com/assets/google.png' alt='Get on GooglePlay'
                style='max-height: 40px; display: block;' /></a>
          </div>
          <p style="margin-bottom: 14px;"> 68 Johnston street, Sunnyside Gauteng, 0002. Pretoria, South Africa.</p>
          <div style="display: block; margin: 21px 0; text-align: center;">
            <a href='facebook.com'><img
                src='https://childsvoice.org/wp-content/uploads/2016/01/facebook-logo-200x200.png' alt='FB'
                style='max-height: 25px; border-radius:5px; display: inline-block; margin-right:1em;' /></a>
            <a href='twitter.com'><img src='https://awmedu.com/wp-content/uploads/2016/08/twitter-icon-big.png' alt='TW'
                style='max-height: 28px; display: inline-block; border-radius:5px; margin-right:1em;' /></a>
            <a href='linkedin.com'><img src='http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG16.png' alt='IN'
                style='max-height: 25px; display: inline-block; border-radius:5px;' />
          </div>
          <div style="text-align:center;">
            <a href="betascratch.com">Home</a> | <a href="betascratch.com/home/?login=true">Login</a> | <a
              href="betascratch.com/privacy-policy">Privacy</a>
          </div>
          <p>Copyright @ Betascratch, <br /> All rights reserved.</p>
        </div>
      </div>
    </div>
</body>
</html>
`,

  FORGOT_PASSWORD: (otp: string) => `
<html>
<body>
  <div style="background-color: #F2F2F2; padding: 7px; margin: 0px;">
    <div style="padding: 0px; margin:0px;">
      <div style="background-color: #F8F9FA; padding: 14px; margin: 0px;">
        <img src='https://betascratch.com/assets/logo_black.png' alt='Betascratch logo'
          style='max-height: 60px; display: block; border-radius: 10px;' />
      </div>
      <div
        style="padding: 14px; margin: 0px; font-size: 15px; color: #2B2F33; line-height: 1.5; border-radius: 0px 0px 10px 10px; border-width: 7px; border-style: solid; border-color: #F8F9FA;">
        <div style="padding-bottom: 36px">
          <p>To reset your account password, please use the following One Time Password (OTP):</p>
          <h3>${otp}</h3>
          <p>This OTP is valid for only 15 mins. If you require any assistance,
            please contact our Customer Service <a href="">here</a>.
          </p>
          <br><br>
          <p>Thank you for using Betascratch.</p>
        </div>
        <div style="text-align:center; font-size:12px; padding: 16px 22px 0px 22px; border-top: 2px solid #F8F9F2;">
          <div style="display: flex; justify-content: center; margin-bottom: 21px">
            <a href='google.com'><img src='https://betascratch.com/assets/apple.png' alt='Get on AppleStore'
                style='max-height: 40px; display: block; margin-right:1em;' /></a>
            <a href='google.com'><img src='https://betascratch.com/assets/google.png' alt='Get on GooglePlay'
                style='max-height: 40px; display: block;' /></a>
          </div>
          <p style="margin-bottom: 14px;"> 68 Johnston street, Sunnyside Gauteng, 0002. Pretoria, South Africa.</p>
          <div style="display: block; margin: 21px 0; text-align: center;">
            <a href='facebook.com'><img
                src='https://childsvoice.org/wp-content/uploads/2016/01/facebook-logo-200x200.png' alt='FB'
                style='max-height: 25px; border-radius:5px; display: inline-block; margin-right:1em;' /></a>
            <a href='twitter.com'><img src='https://awmedu.com/wp-content/uploads/2016/08/twitter-icon-big.png' alt='TW'
                style='max-height: 28px; display: inline-block; border-radius:5px; margin-right:1em;' /></a>
            <a href='linkedin.com'><img src='http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG16.png' alt='IN'
                style='max-height: 25px; display: inline-block; border-radius:5px;' />
          </div>
          <div style="text-align:center;">
            <a href="betascratch.com">Home</a> | <a href="betascratch.com/home/?login=true">Login</a> | <a
              href="betascratch.com/privacy-policy">Privacy</a>
          </div>
          <p>Copyright @ Betascratch, <br /> All rights reserved.</p>
        </div>
      </div>
    </div>
</body>
</html>
`,

  VERIFY_ACCOUNT: (otp: string) =>
    `<html>
<body>
  <div style="background-color: #F2F2F2; padding: 7px; margin: 0px;">
    <div style="padding: 0px; margin:0px;">
      <div style="background-color: #F8F9FA; padding: 14px; margin: 0px;">
        <img src='https://betascratch.com/assets/logo_black.png' alt='Betascratch logo'
          style='max-height: 60px; display: block; border-radius: 10px;' />
      </div>
      <div
        style="padding: 14px; margin: 0px; font-size: 15px; color: #2B2F33; line-height: 1.5; border-radius: 0px 0px 10px 10px; border-width: 7px; border-style: solid; border-color: #F8F9FA;">
        <div style="padding-bottom: 36px">
          <p>To verify your account, please use the following One Time Password (OTP):</p>
          <h3>${otp}</h3>
          <p>This OTP is valid for only 15 mins. If you require any assistance,
            please contact our Customer Service <a href="">here</a>.
          </p>
          <br><br>
          <p>Thank you for using Betascratch.</p>
        </div>
        <div style="text-align:center; font-size:12px; padding: 16px 22px 0px 22px; border-top: 2px solid #F8F9F2;">
          <div style="display: flex; justify-content: center; margin-bottom: 21px">
            <a href='google.com'><img src='https://betascratch.com/assets/apple.png' alt='Get on AppleStore'
                style='max-height: 40px; display: block; margin-right:1em;' /></a>
            <a href='google.com'><img src='https://betascratch.com/assets/google.png' alt='Get on GooglePlay'
                style='max-height: 40px; display: block;' /></a>
          </div>
          <p style="margin-bottom: 14px;"> 68 Johnston street, Sunnyside Gauteng, 0002. Pretoria, South Africa.</p>
          <div style="display: block; margin: 21px 0; text-align: center;">
            <a href='facebook.com'><img
                src='https://childsvoice.org/wp-content/uploads/2016/01/facebook-logo-200x200.png' alt='FB'
                style='max-height: 25px; border-radius:5px; display: inline-block; margin-right:1em;' /></a>
            <a href='twitter.com'><img src='https://awmedu.com/wp-content/uploads/2016/08/twitter-icon-big.png' alt='TW'
                style='max-height: 28px; display: inline-block; border-radius:5px; margin-right:1em;' /></a>
            <a href='linkedin.com'><img src='http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG16.png' alt='IN'
                style='max-height: 25px; display: inline-block; border-radius:5px;' />
          </div>
          <div style="text-align:center;">
            <a href="betascratch.com">Home</a> | <a href="betascratch.com/home/?login=true">Login</a> | <a
              href="betascratch.com/privacy-policy">Privacy</a>
          </div>
          <p>Copyright @ Betascratch, <br /> All rights reserved.</p>
        </div>
      </div>
    </div>
</body>
</html>`,

  //? not used for now
  REFRERRAL: (name: string) => `You have successfully referred ${name}`,

  //? not used for now
  REQUEST_WITHDRAWAL: (otp: string) =>
    `Your otp code is ${otp}. Do not share this code with anyone, expires in 15 minutes`,

  //? not used for now
  WITHDRAWAL_APPROVAL: (amount: string, currency: string) =>
    `Your account has been credited with ${currency}${amount}`,
};
