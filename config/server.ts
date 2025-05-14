export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://blogcrm.onrender.com',

  app: {
    keys: env.array('APP_KEYS'),
  },
});
