import {Request, Response, NextFunction} from "express";

import HttpError from "../utils/HttpError.js";

import { findSession, findUserOrAdmin } from "../services/auth.service.js";

import { AuthRequest } from "../typescript/interfaces.js";

const authenticate = async(req: Request, res: Response, next: NextFunction): Promise<void>=> {
   const {accessToken} = req.cookies;
   if(!accessToken) throw HttpError(401, "accessToken not found");
   const session = await findSession({accessToken});
   if(!session) throw HttpError(401, "session not found");
   if(session.accessTokenValidUntil < new Date()) throw HttpError(401, "accessToken expired");

   const user = await findUserOrAdmin({_id: session.userId});
   if(!user) throw HttpError(401, "user not found");

   (req as AuthRequest).user = user;
   next();
}

export default authenticate;