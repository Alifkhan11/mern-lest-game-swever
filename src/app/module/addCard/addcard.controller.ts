import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { AddCardService } from "./addcard.service";
import httpStstus from "http-status";

const addCardCreate = catchAsync(async (req, res) => {
    const resualt = await AddCardService.createAddCardFromDB(req.body);
    sendResponse(res, {
        statusCode: httpStstus.OK,
        message: "AddCard Created Successfully",
        success: true,
        data: resualt
    });
});

const getAllAddCard = catchAsync(async (req, res) => {
    const id=req.params.id;
    const resualt = await AddCardService.getAllAddCardToDB(id);
    sendResponse(res, {
        statusCode: httpStstus.OK,
        message: "All AddCard",
        success: true,
        data: resualt
    });
});


const updathAddCard=catchAsync(async (req, res) => {
    const id=req.body.id
    const data={
        isDeleted:req.body.isDeleted
    }
    const resualt = await AddCardService.updathAddCardFromDB(id,data);
    sendResponse(res, {
        statusCode: httpStstus.OK,
        message: "AddCard Updated Successfully",
        success: true,
        data: resualt
    })
    
}
);


export const AddCardController = {
    addCardCreate,
    getAllAddCard,
    updathAddCard
};