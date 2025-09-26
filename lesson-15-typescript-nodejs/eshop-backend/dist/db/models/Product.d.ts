export default Product;
declare const Product: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    category: import("mongoose").Types.ObjectId;
    price: number;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    category: import("mongoose").Types.ObjectId;
    price: number;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    category: import("mongoose").Types.ObjectId;
    price: number;
} & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    category: import("mongoose").Types.ObjectId;
    price: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    category: import("mongoose").Types.ObjectId;
    price: number;
}>, {}, import("mongoose").ResolveSchemaOptions<{
    versionKey: false;
    timestamps: true;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    category: import("mongoose").Types.ObjectId;
    price: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
import { Schema } from "mongoose";
//# sourceMappingURL=Product.d.ts.map