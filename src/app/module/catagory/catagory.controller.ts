import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { CatagoryService } from "./catagory.service";
import httpStatus from "http-status";

const createCatagory = catchAsync(async (req, res) => {
    const resualt = await CatagoryService.createCatagoryFromDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Catagory created successfully",
        data: resualt
    })
})


const getAllCatagory = catchAsync(async (req, res) => {
    const resualt = await CatagoryService.getAllCatagoryFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Catagory fetched successfully",
        data: resualt
    })
})


const deletedCatagory = catchAsync(async (req, res) => {
    const resualt = await CatagoryService.deletedCatagoryFromDB(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Catagory deleted successfully",
        data: resualt
    })
})

const getSingleCatagory = catchAsync(async (req, res) => {
    const resualt = await CatagoryService.getSingleCatagoryFromDB(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Catagory fetched successfully",
        data: resualt
    })
})

const updathCatagory = catchAsync(async (req, res) => { 
    const id=req?.params?.id as string 
    console.log(id,req.body);
    
    const resualt = await CatagoryService.updathCatagoryFromDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Catagory updated successfully",
        data: resualt
    })
})

export const CatagoryController = {
    createCatagory,
    getAllCatagory,
    deletedCatagory,
    getSingleCatagory,
    updathCatagory
}