import express, { NextFunction } from 'express';

export default (func: express.RequestHandler) =>
  (req: express.Request, res: express.Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
