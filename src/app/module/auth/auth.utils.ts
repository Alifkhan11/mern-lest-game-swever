import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken'
import { Types } from 'mongoose';

export const createToken = (
  jwtPayloads: {  role: string,email:string,name:string,id:Types.ObjectId },
  secret: string,
  expiresIn: SignOptions['expiresIn'],
) => {
  return jwt.sign(jwtPayloads, secret, { expiresIn } as SignOptions);
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};