import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import connectToDatabase from './config/database';

connectToDatabase();

const PORT = process.env.PORT || 8000;
const MODE = process.env.MODE || 'dev';

const server = app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT} in ${MODE} mode `);
});

process.on('unhandledRejection', (err: Error) => {
  console.log('Shutting down the server due to: ' + err.message);
  server.close(() => {
    process.exit(1);
  });
});
