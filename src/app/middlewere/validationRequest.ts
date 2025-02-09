import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

const validateRequest = (schema: AnyZodObject| ZodEffects<AnyZodObject>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        cookies:req.cookies
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;