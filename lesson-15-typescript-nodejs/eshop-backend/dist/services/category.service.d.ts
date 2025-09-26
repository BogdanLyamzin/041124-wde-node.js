export function getCategories(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
})[], import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, "find", {}>;
export function getCategoryById(id: any): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export function addCategory(payload: any, file: any): Promise<import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
export function updateCategoryById(id: any, payload: any): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export function deleteCategoryById(id: any): Promise<(import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
}, {}, {
    versionKey: false;
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    image: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
//# sourceMappingURL=category.service.d.ts.map