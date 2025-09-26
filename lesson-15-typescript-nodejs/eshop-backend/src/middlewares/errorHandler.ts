import {Request, Response, NextFunction} from "express";

import { IHttpError } from "../typescript/interfaces";

const errorHandler = (error: IHttpError, req: Request, res: Response, next: NextFunction)=> {
    const {status = 500, message = "Server error"} = error;

    res.status(status).json({
        message,
    });
};

export default errorHandler;