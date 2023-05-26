import ErrorHandler from 'utils/ErrorHandler';

import express from 'express';

const HandleError = (
  err: ErrorHandler,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Enteral server error';

  if (process.env.NODE_ENV.trim() === 'DEVELOPMENT') {
    res.status(err.statusCode).json({
      success: false,
      errors: err,
      message: err.message,
      error_stack: err.stack,
    });
  }

  if (process.env.NODE_ENV.trim() === 'PRODUCTION') {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
};

export default HandleError;
