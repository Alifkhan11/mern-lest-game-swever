import { model, Schema } from "mongoose";
import { TProductsCreate } from "./products.interfatch";

const ProductsCreateSchema = new Schema<TProductsCreate>({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    productImages: {
        type: [String],
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Catagory'
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
});

export const Products=model<TProductsCreate>('Products', ProductsCreateSchema);