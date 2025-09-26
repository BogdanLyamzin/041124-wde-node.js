"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAllHooksToMongooseSchema = exports.setUpdateSettings = exports.handleSaveError = void 0;
const handleSaveError = (error, doc, next) => {
    if (error.name === "ValidationError") {
        error.status = 400;
    }
    if (error.name === "MongoServerError" && error.code === 11000) {
        error.status = 409;
    }
    next();
};
exports.handleSaveError = handleSaveError;
const setUpdateSettings = function (next) {
    this.options.new = true;
    this.options.runValidators = true;
    next();
};
exports.setUpdateSettings = setUpdateSettings;
const addAllHooksToMongooseSchema = mongooseSchema => {
    mongooseSchema.post("save", exports.handleSaveError);
    mongooseSchema.pre("findOneAndUpdate", exports.setUpdateSettings);
    mongooseSchema.post("findOneAndUpdate", exports.handleSaveError);
};
exports.addAllHooksToMongooseSchema = addAllHooksToMongooseSchema;
//# sourceMappingURL=hooks.js.map