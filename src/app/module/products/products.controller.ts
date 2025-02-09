import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import httpStatus from "http-status";
import { ProductsService } from "./products.service";

const createProducts=catchAsync(async (req, res) => {
    const resualt =await ProductsService.createProductsFromDB(req.body);
    sendResponse(res,{
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Product created successfully",
        data: resualt
    })
})

const getAllProducts=catchAsync(async (req, res) => {
    const resualt =await ProductsService.getAllProductsFromDB(req.query);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Products fetched successfully",
        data: resualt.resualt,
        meta:resualt.meta
    })
})

const deletedProduct=catchAsync(async (req, res) => {
    const resualt =await ProductsService.deletedProductFromDB(req.params.id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Product deleted successfully",
        data: resualt
    })
})

const getSingleProduct=catchAsync(async (req, res) => {
    const resualt =await ProductsService.getSingleProductFromDB(req.params.id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Product retrive successfully",
        data: resualt
    })
})


const updateProduct=catchAsync(async (req, res) => {
    const resualt =await ProductsService.updateProductFromDB(req.params.id,req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: "Product updated successfully",
        data: resualt
    })
})




export const ProductsController={
    createProducts,
    getAllProducts,
    deletedProduct,
    getSingleProduct,
    updateProduct
}