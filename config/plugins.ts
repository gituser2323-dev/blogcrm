// config/plugins.js

module.exports = ({ env }) => ({
  // Cloudinary upload config
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  },

  // Users-permissions plugin config
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET') || 'WaOlDUPcQvfawU2d/FFK5w==',
    },
  },
});
