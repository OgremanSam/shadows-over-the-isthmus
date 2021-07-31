const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://guest:guest@cluster0.7wbe3.mongodb.net/shadows',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];