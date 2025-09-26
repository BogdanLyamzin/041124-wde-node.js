export namespace emailValidation {
    namespace regexp {
        let value: RegExp;
        let message: string;
    }
    namespace required {
        let value_1: boolean;
        export { value_1 as value };
        let message_1: string;
        export { message_1 as message };
    }
}
export namespace passwordValidation {
    export namespace regexp_1 {
        let value_2: RegExp;
        export { value_2 as value };
        let message_2: string;
        export { message_2 as message };
    }
    export { regexp_1 as regexp };
    export namespace min {
        let value_3: number;
        export { value_3 as value };
        let message_3: string;
        export { message_3 as message };
    }
}
//# sourceMappingURL=auth.constants.d.ts.map