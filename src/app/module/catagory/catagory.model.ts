import { model, Schema } from "mongoose";
import { TCatagoryCreate } from "./catagory.interfatch";

const createCatagotySchema = new Schema<TCatagoryCreate>({
    catagoryName:{
        type: String,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
})    


export const Catagory=model<TCatagoryCreate>('Catagory', createCatagotySchema);