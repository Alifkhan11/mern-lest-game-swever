import { TCatagoryCreate } from "./catagory.interfatch";
import { Catagory } from "./catagory.model";

const createCatagoryFromDB = async (data:TCatagoryCreate) => {
    const resualt = await Catagory.create(data);
    return resualt;
}

const getAllCatagoryFromDB=async()=>{
    const resualt =await Catagory.find();
    return resualt;
}

const deletedCatagoryFromDB=async(id:string)=>{
    const resualt =await Catagory.findByIdAndUpdate(id,{isDeleted:true}, { new: true });
    return resualt;
}


const getSingleCatagoryFromDB=async(id:string)=>{
    const resualt =await Catagory.findById(id);
    return resualt;
}

const updathCatagoryFromDB=async(id:string,data:any)=>{
    const resualt =await Catagory.findByIdAndUpdate(id,data, { new: true,upsert:true });
    return resualt;
}



export const CatagoryService = {
    createCatagoryFromDB,
    getAllCatagoryFromDB,
    deletedCatagoryFromDB,
    getSingleCatagoryFromDB,
    updathCatagoryFromDB
}