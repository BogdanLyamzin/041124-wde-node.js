export function findSession(query: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, "findOne", {}>;
export function findUser(query: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, "findOne", {}>;
export function findUserOrAdmin(query: any): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    role: "manager" | "admin" | "superadmin";
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    role: "manager" | "admin" | "superadmin";
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | (import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export function registerUser(payload: any): Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export function verifyUser(code: any): Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export function restoreUserPassword(email: any): Promise<void>;
export function createNewUserPassword({ code, password }: {
    code: any;
    password: any;
}): Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export function loginUser(payload: any): Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export function logoutuser({ accessToken }: {
    accessToken: any;
}): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export function refreshTokens({ refreshToken }: {
    refreshToken: any;
}): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
//# sourceMappingURL=auth.service.d.ts.map