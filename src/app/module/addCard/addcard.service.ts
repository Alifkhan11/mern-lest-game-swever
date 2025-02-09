import { TAddCardCreate } from "./addcard.interfatch";
import { AddCard } from "./addcard.model";

const createAddCardFromDB = async (data:TAddCardCreate) => {
    const resualt = await AddCard.create(data);
    return resualt;
}

const getAllAddCardToDB = async (id:string) => {
    const resualt = await AddCard.find({userId:id});
    return resualt;
}

const updathAddCardFromDB=async (id:string,data:any)=>{
    const resualt = await AddCard.findByIdAndUpdate(id,data,{update:true,new:true,upsert:true});
    return resualt;
}

export const AddCardService = {
    createAddCardFromDB,
    getAllAddCardToDB,
    updathAddCardFromDB
}