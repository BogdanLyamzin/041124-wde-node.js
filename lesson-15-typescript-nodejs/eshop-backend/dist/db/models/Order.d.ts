export default Order;
declare const Order: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        product: import("mongoose").Types.ObjectId;
        count: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }> & {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }>;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        product: import("mongoose").Types.ObjectId;
        count: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }> & {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }>;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        product: import("mongoose").Types.ObjectId;
        count: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }> & {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }>;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        product: import("mongoose").Types.ObjectId;
        count: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }> & {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }>;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        product: import("mongoose").Types.ObjectId;
        count: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }> & {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }>;
}>, {}, import("mongoose").ResolveSchemaOptions<{
    versionKey: false;
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user: import("mongoose").Types.ObjectId;
    items: import("mongoose").Types.DocumentArray<{
        product: import("mongoose").Types.ObjectId;
        count: number;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }> & {
        product: import("mongoose").Types.ObjectId;
        count: number;
    }>;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
import { Schema } from "mongoose";
//# sourceMappingURL=Order.d.ts.map