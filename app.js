
'use strict';

const debug = require('debug')('egg-passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;


module.exports = app => {
  const opts = app.config.passportJwt;
  opts.secretOrKey= app.config.keys,
  opts.passReqToCallback = true;

  app.passport.use(new JwtStrategy(opts, (req, jwt_payload, done) =>{

    debug('%s %s get user: %j', req.method, req.url, jwt_payload);

    app.passport.doVerify(req, jwt_payload, done);
   }));
};
