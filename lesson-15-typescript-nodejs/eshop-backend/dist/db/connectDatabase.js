"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { MONGODB_URI_CLOUD } = process.env;
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URI_CLOUD);
        console.log("Database connection successfully");
    }
    catch (error) {
        console.log(`Database connection failed ${error}`);
        console.log(error);
    }
};
exports.connectDatabase = connectDatabase;
exports.default = exports.connectDatabase;
//# sourceMappingURL=connectDatabase.js.map