import express from 'express';

export const registerUser = (req: express.Request, res: express.Response) => {
  res.status(200).json('hello');
};
