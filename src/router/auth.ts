import express from 'express';

export default (router: express.Router) => {
  router.get('auth', (req, res) => {
    res.send('hello').status(200);
  });
};
