import AppError from "../../error/appError";
import { TUserLogin, TUserRegistration } from "./auth.interfatch";
import { User } from "./auth.model";
import httpStatus from 'http-status'
import bcrypt from 'bcrypt'
import { createToken } from "./auth.utils";
import config from "../../config";

const userRegistrationFromDB = async (payload: TUserRegistration) => {
    const isPasswordMatch = payload.password === payload.confirmPassword
    if (!isPasswordMatch) {
        throw new AppError(httpStatus.OK, 'Password not match')
    }

    const user = await User.findOne({ email: payload.email })
    if (user) {
        throw new AppError(httpStatus.CONFLICT, 'Email already exist')
    }

    payload.password = await bcrypt.hash(payload.password, 10)

    const resualt = await User.create(payload)
    return resualt
}


const userLoginToDB = async (payload: TUserLogin) => {

    const user = await User.findOne({ email: payload.email })
    if (!user) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Email ')
    }

    if (user.isDeleted) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User is Deleted')
    }
    const isPasswordValid = await bcrypt.compare(payload.password, user.password)
    if (!isPasswordValid) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Password invalid')
    }

    const JwtPayload = {
        email: user.email,
        role: user.role,
        id:user._id,
        name: user.name,
    }

    const accessToken = createToken(
        JwtPayload,
        config.JWT_ACCESS as string,
        config.JWT_ACCESS_TIME as any
    )
    const refreshToken = createToken(
        JwtPayload,
        config.JWT_REFRESH as string,
        config.JWT_REFRESH_TIME as any
    )



    return {
        accessToken,
        refreshToken

    }
}


const getUserFromDB = async () => {
    const resualt = await User.find()
    return resualt
}

const userDeletedFromDB = async (id: string) => {
    const resualt = await User.findByIdAndUpdate(
        id,
        {
            $set:
            {
                isDeleted: true
            }
        },
        {
            upsert: true,
            new: true
        }
    )
    return resualt
}

const getSingleUserFromDB = async (id: string) => {
    const resualt = await User.findById(id)
    return resualt
}
const updathUserFromDB = async (id: string, data: any) => {
    const resualt = await User.findByIdAndUpdate(
        id,
        {
            $set: data
        },
        {
            upsert: true,
            new: true
        }
    )
    return resualt
}

export const AuthService = {
    userRegistrationFromDB,
    userLoginToDB,
    getUserFromDB,
    userDeletedFromDB,
    getSingleUserFromDB,
    updathUserFromDB,
}