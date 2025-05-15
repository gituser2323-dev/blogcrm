module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'https://res.cloudinary.com',  // <--- add this here to allow Cloudinary images
          ],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://speedupinfotech.com', 'https://www.speedupinfotech.com', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      headers: ['Content-Type', 'Authorization', 'X-Requested-With'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
