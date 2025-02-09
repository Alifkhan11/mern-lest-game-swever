import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interfatch/error';

const handleZodError = (err: ZodError) => {
  const errorSource: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSource,
  };
};

export default handleZodError;