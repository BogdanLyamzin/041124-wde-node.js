import { Request } from "express";

import {IUserDocument} from "../db/models/User";

export interface IHttpError extends Error {
    status: number;
}

export interface AuthRequest extends Request {
    user: IUserDocument;
}

