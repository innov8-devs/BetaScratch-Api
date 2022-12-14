export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,

  SEND_GRID_KEY: process.env.SENGRID_API_KEY,

  token: {
    access: {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiration: process.env.JWT_ACCESS_TOKEN_EXPIRATION,
    },

    refresh: {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
    },
  },
});
