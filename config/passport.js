import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import mongoose from "mongoose";
import User from "../models/User.js";
import keys from "../config/keys.js";

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
export default passport => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};