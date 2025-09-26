export default Session;
declare const Session: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
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
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}>, {}, import("mongoose").ResolveSchemaOptions<{
    versionKey: false;
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    userId: import("mongoose").Types.ObjectId;
    accessToken: string;
    refreshToken: string;
    accessTokenValidUntil: NativeDate;
    refreshTokenValidUntil: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
import { Schema } from "mongoose";
//# sourceMappingURL=Session.d.ts.map