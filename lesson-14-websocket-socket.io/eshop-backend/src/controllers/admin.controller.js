import { getAdmins, addAdmin } from "../services/admin.service.js"

export const getAdminsController = async(req, res)=> {
    const admins = await getAdmins();

    res.json(admins);
}

export const getManagersController = async(req, res)=> {
    const managers = await getAdmins({role: "manager"});

    res.json(managers);
}

export const addAdminController = async(req, res)=> {
    await addAdmin({...req.body, role: "admin"});

    res.status(201).json({
        message: "Admin add successfully"
    })
}

export const addManagerController = async(req, res)=> {
    await addAdmin({...req.body, role: "manager"});

    res.status(201).json({
        message: "Manager add successfully"
    })
}