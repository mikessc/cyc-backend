module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DB_HOST', 'localhost'),
        port: env('DB_PORT', 3306),
        database: env('DB_NAME', 'trackingApp'),
        username: env('DB_USERNAME', 'root'),
        password: env('DB_PASSWORD', 'root'),
        timezone: 'America/Costa_Rica'
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
