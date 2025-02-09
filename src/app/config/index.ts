import dotenv from 'dotenv'
import path from 'path'

dotenv.config({path:path.join(process.cwd(),'.env')})

export default {
    PORT:process.env.PORT,
    DD_URL:process.env.DD_URL,
    NODE_ENV:process.env.NODE_ENV,
    JWT_ACCESS:process.env.JWT_ACCESS,
    JWT_ACCESS_TIME:process.env.JWT_ACCESS_TIME,
    JWT_REFRESH:process.env.JWT_REFRESH,
    JWT_REFRESH_TIME:process.env.JWT_REFRESH_TIME
}
