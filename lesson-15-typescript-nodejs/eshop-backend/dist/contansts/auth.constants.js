"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordValidation = exports.emailValidation = void 0;
exports.emailValidation = {
    regexp: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Email must contains @ and no contain spaces"
    },
    required: {
        value: true,
        message: "Password required"
    }
};
exports.passwordValidation = {
    regexp: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/,
        message: "Password must contain at least on letter and on number"
    },
    min: {
        value: 8,
        message: "Password must have at least 8 symbols"
    }
};
//# sourceMappingURL=auth.constants.js.map