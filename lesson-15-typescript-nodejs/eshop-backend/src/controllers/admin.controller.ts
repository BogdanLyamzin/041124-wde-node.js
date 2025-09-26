import {Request, Response} from "express";

import { getAdmins, addAdmin } from "../services/admin.service";

import { IAdminDocument } from "../db/models/Admin";

export const getAdminsController = async(req: Request, res: Response)=> {
    const admins: IAdminDocument[] = await getAdmins();

    res.json(admins);
}

export const getManagersController = async(req: Request, res: Response)=> {
    const managers = await getAdmins({role: "manager"});

    res.json(managers);
}

export const addAdminController = async(req: Request, res: Response)=> {
    await addAdmin({...req.body, role: "admin"});

    res.status(201).json({
        message: "Admin add successfully"
    })
}

export const addManagerController = async(req: Request, res: Response)=> {
    await addAdmin({...req.body, role: "manager"});

    res.status(201).json({
        message: "Manager add successfully"
    })
}