"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const node_path_1 = __importDefault(require("node:path"));
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const destination = node_path_1.default.resolve("temp");
const storage = multer_1.default.diskStorage({
    // destination: (req, file, cb)=> {
    //     cb(null, destination);
    // },
    destination,
    filename: (req, file, cb) => {
        const uniquePreffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
        const filename = `${uniquePreffix}_${file.originalname}`;
        cb(null, filename);
    }
});
const limits = {
    fileSize: 1024 * 1024 * 5,
};
const fileFilter = (req, file, cb) => {
    const extension = file.originalname.split(".").pop();
    if (extension === "exe") {
        return cb((0, HttpError_js_1.default)(400, ".exe extension not allow"));
    }
    cb(null, true);
};
const upload = (0, multer_1.default)({
    storage,
    limits,
    fileFilter,
});
exports.default = upload;
//# sourceMappingURL=upload.js.map