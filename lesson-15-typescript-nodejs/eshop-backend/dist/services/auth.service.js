"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokens = exports.logoutuser = exports.loginUser = exports.createNewUserPassword = exports.restoreUserPassword = exports.verifyUser = exports.registerUser = exports.findUserOrAdmin = exports.findUser = exports.findSession = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_js_1 = __importDefault(require("../db/models/User.js"));
const Admin_js_1 = __importDefault(require("../db/models/Admin.js"));
const Session_js_1 = __importDefault(require("../db/models/Session.js"));
const sendEmail_js_1 = __importDefault(require("../utils/sendEmail.js"));
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const generateRandomString_js_1 = __importDefault(require("../utils/generateRandomString.js"));
const { FRONTEND_URL, JWT_SECRET } = process.env;
const createSession = () => ({
    accessToken: (0, generateRandomString_js_1.default)(30),
    refreshToken: (0, generateRandomString_js_1.default)(30),
    accessTokenValidUntil: new Date(Date.now() + 1000 * 60 * 15),
    refreshTokenValidUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
});
const findSession = query => Session_js_1.default.findOne(query);
exports.findSession = findSession;
const findUser = query => User_js_1.default.findOne(query);
exports.findUser = findUser;
const findUserOrAdmin = async (query) => {
    const user = await User_js_1.default.findOne(query);
    if (user)
        return user;
    return Admin_js_1.default.findOne(query);
};
exports.findUserOrAdmin = findUserOrAdmin;
const registerUser = async (payload) => {
    const { password, email } = payload;
    const user = await (0, exports.findUser)({ email });
    if (user)
        throw (0, HttpError_js_1.default)(401, "Email already exist");
    const hashPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = await User_js_1.default.create({ ...payload, password: hashPassword });
    const code = jsonwebtoken_1.default.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a href="${FRONTEND_URL}/auth/verify?code=${code}" target="_blank">Click verify email</a>`,
    };
    await (0, sendEmail_js_1.default)(verifyEmail);
    return newUser;
};
exports.registerUser = registerUser;
const verifyUser = async (code) => {
    try {
        const { email } = jsonwebtoken_1.default.verify(code, JWT_SECRET);
        const user = await (0, exports.findUser)({ email });
        if (!user)
            throw (0, HttpError_js_1.default)(401, "User not found");
        user.verify = true;
        await user.save();
        return user;
    }
    catch (error) {
        throw (0, HttpError_js_1.default)(401, error.message);
    }
};
exports.verifyUser = verifyUser;
const restoreUserPassword = async (email) => {
    const user = await (0, exports.findUserOrAdmin)({ email });
    if (!user)
        throw (0, HttpError_js_1.default)(401, "User not found");
    const code = jsonwebtoken_1.default.sign({ email }, JWT_SECRET, { expiresIn: "15m" });
    const passwordRestoreEmail = {
        to: email,
        subject: "Restore password",
        html: `<a href="${FRONTEND_URL}/auth/restore-password?code=${code}" target="_blank">Click restore password</a>`,
    };
    await (0, sendEmail_js_1.default)(passwordRestoreEmail);
};
exports.restoreUserPassword = restoreUserPassword;
const createNewUserPassword = async ({ code, password }) => {
    try {
        const { email } = jsonwebtoken_1.default.verify(code, JWT_SECRET);
        const user = await (0, exports.findUser)({ email });
        if (!user)
            throw (0, HttpError_js_1.default)(401, "User not found");
        const hashPassword = await bcrypt_1.default.hash(password, 10);
        user.password = hashPassword;
        await user.save();
        return user;
    }
    catch (error) {
        throw (0, HttpError_js_1.default)(401, error.message);
    }
};
exports.createNewUserPassword = createNewUserPassword;
const loginUser = async (payload) => {
    const { email, password } = payload;
    const user = await (0, exports.findUserOrAdmin)({ email });
    if (!user)
        throw (0, HttpError_js_1.default)(401, "Email or password invalid");
    if (!user.verify)
        throw (0, HttpError_js_1.default)(401, "Email not verified");
    const passwordCompare = await bcrypt_1.default.compare(password, user.password);
    if (!passwordCompare)
        throw (0, HttpError_js_1.default)(401, "Email or password invalid");
    await Session_js_1.default.findOneAndDelete({ userId: user._id });
    const session = createSession();
    return Session_js_1.default.create({
        userId: user._id,
        ...session,
    });
};
exports.loginUser = loginUser;
const logoutuser = async ({ accessToken }) => {
    const session = await Session_js_1.default.findOneAndDelete({ accessToken });
    return session;
};
exports.logoutuser = logoutuser;
const refreshTokens = async ({ refreshToken }) => {
    if (!refreshToken)
        throw (0, HttpError_js_1.default)(401, "refreshToken not found");
    const session = await (0, exports.findSession)({ refreshToken });
    if (!session)
        throw (0, HttpError_js_1.default)(401, "refreshToken not found");
    if (session.refreshTokenValidUntil < new Date())
        throw (0, HttpError_js_1.default)(401, "refreshToken expired");
    const newSession = createSession();
    return await Session_js_1.default.findByIdAndUpdate({ _id: session._id }, newSession);
};
exports.refreshTokens = refreshTokens;
//# sourceMappingURL=auth.service.js.map