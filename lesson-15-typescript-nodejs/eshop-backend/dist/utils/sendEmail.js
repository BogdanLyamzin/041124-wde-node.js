"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const { UKR_NET_PASSWORD, UKR_NET_EMAIL } = process.env;
const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 887, 2525
    secure: true,
    auth: {
        user: UKR_NET_EMAIL,
        pass: UKR_NET_PASSWORD
    }
};
const transport = nodemailer_1.default.createTransport(nodemailerConfig);
const sendEmail = payload => {
    const email = { ...payload, from: UKR_NET_EMAIL };
    return transport.sendMail(email);
};
exports.default = sendEmail;
//# sourceMappingURL=sendEmail.js.map