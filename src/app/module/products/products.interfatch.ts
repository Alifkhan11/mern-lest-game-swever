import { Types } from "mongoose";

export type TProductsCreate = {
    productName: string;
    description: string;
    price: number; 
    stockQuantity: number; 
    category: Types.ObjectId;
    productImages: string[];
    isDeleted: boolean;
}