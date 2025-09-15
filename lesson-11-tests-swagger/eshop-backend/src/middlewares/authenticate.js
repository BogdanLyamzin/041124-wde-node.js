import HttpError from "../utils/HttpError.js";

import { findSession, findUserOrAdmin } from "../services/auth.service.js";

const authenticate = async(req, res, next)=> {
   const {accessToken} = req.cookies;
   if(!accessToken) throw HttpError(401, "accessToken not found");

   const session = await findSession({accessToken});
   if(!session) throw HttpError(401, "session not found");
   if(session.accessTokenValidUntil < new Date()) throw HttpError(401, "accessToken expired");

   const user = await findUserOrAdmin({id: session.userId});
   if(!user) throw HttpError(401, "user not found");

   req.user = user;
   next();
}

export default authenticate;