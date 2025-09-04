import { registerUser, verifyUser, loginUser } from "../services/auth.service.js"

export const registerController = async(req, res)=> {
    await registerUser(req.body);

    res.status(201).json({
        message: "Register successfully"
    });
}

export const verifyController = async(req, res)=> {
    await verifyUser(req.query.code);

    res.json({
        message: "User verify successfully"
    })
}

export const loginController = async(req, res)=> {
    const {accessToken, refreshToken} = await loginUser(req.body);
}