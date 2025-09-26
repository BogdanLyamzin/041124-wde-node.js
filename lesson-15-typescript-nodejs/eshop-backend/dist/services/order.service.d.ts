export function getOrders(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
})[], import("mongoose").Document<unknown, {}, {
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
}, {}, {
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
}, "find", {}>;
export function addOrder(payload: any): Promise<import("mongoose").Document<unknown, {}, {
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
}>;
//# sourceMappingURL=order.service.d.ts.map