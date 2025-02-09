import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRespons";
import { AuthService } from "./auth.service";
import httpStatus from "http-status";

const userRegistration = catchAsync(async (req, res) => {
    const resualt = await AuthService.userRegistrationFromDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User Registration successfully',
        data: resualt
    })
})
const userLogin = catchAsync(async (req, res) => {
    const resualt = await AuthService.userLoginToDB(req.body)
    res.cookie('AccessToken', resualt.accessToken, {
        httpOnly: true,
        secure: true
    })
    res.cookie('RefreshToken', resualt.refreshToken, {
        httpOnly: true,
        secure: true,
    })
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User login  successfully',
        data: resualt
    })
})

const getUser=catchAsync(async (req, res) => {
    const resualt = await AuthService.getUserFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User login  successfully',
        data: resualt
    })
})

const userDeleted=catchAsync(async (req, res) => {
    const id = req.params.id
    const resualt = await AuthService.userDeletedFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User Deleted  successfully',
        data: resualt
    })
})

const getSingleUser=catchAsync(async (req, res) => {
    const id = req.params.id
    const resualt = await AuthService.getSingleUserFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Single User Retrive  successfully',
        data: resualt
    })
})

const updathUser=catchAsync(async (req, res) => {
    const id = req.params.id
    const data=req.body
    const resualt = await AuthService.updathUserFromDB(id,data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User Updated  successfully',
        data: resualt
    })
})


export const AuthController = {
    userRegistration,
    userLogin,
    getUser,
    userDeleted,
    getSingleUser,
    updathUser
}