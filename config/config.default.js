'use strict';
const ExtractJwt = require('passport-jwt').ExtractJwt;

/**
 * egg-passport-jwt default config
 * @member Config#
 * @property {String} SOME_KEY - some description
 */
exports.passportJwt = {
    "jwtFromRequest": ExtractJwt.fromAuthHeaderAsBearerToken(),
};
