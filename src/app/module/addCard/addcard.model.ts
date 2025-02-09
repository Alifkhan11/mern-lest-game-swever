import { model, Schema } from "mongoose";
import { TAddCardCreate } from "./addcard.interfatch";

const AddCardCreateSchema = new Schema<TAddCardCreate>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true
    },
    productImages: {
        type: [String],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true

});

export const AddCard=model<TAddCardCreate>("AddCard", AddCardCreateSchema);