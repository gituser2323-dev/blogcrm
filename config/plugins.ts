// config/plugins.js

module.exports = {
  'users-permissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET || 'WaOlDUPcQvfawU2d/FFK5w==',
    },
  },
};
