import { Types } from "mongoose";

export type TAddCardCreate = {
    userId: Types.ObjectId;
    productName: string;
    description: string;
    price: number;
    stockQuantity: number;
    category: Types.ObjectId;
    productImages: string[];
    isDeleted: boolean
};