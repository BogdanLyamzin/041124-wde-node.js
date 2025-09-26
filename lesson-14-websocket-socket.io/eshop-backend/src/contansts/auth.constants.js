export const emailValidation = {
    regexp: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Email must contains @ and no contain spaces"
    },
    required: {
        value: true,
        message: "Password required"
    }
};

export const passwordValidation = {
    regexp: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]+$/,
        message: "Password must contain at least on letter and on number"
    },
    min: {
        value: 8,
        message: "Password must have at least 8 symbols"
    }
};

