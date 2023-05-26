import { registerUser } from '../controllers/authController';
import express from 'express';

export default (router: express.Router) => {
  router.get('/auth', registerUser);
};
