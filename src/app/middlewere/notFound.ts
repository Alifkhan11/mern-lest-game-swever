import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status'

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    err:''
  });
};

export default notFound;