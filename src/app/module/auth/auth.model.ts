import { model, Schema } from "mongoose";
import { TUserRegistration } from "./auth.interfatch";

const userRegistrationSchema=new Schema<TUserRegistration>({
    name:{
        type:String,
        required:true,
    },
  
    email:{
        type:String,
        required:true,
    },
  
    password:{
        type:String,
        required:true,
    },
    role:{
        type :String,
        enum:['user','admin'],
        default:'user'
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
  
})

export const User=model<TUserRegistration>('User',userRegistrationSchema)