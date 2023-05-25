import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './router';

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MODE = process.env.MODE || 'dev';

app.get('/', (req: express.Request, res: express.Response) => {
  res
    .json({
      Project: 'All In One Api',
      Version: '1.0.0',
      Developer: 'Asif Nihal',
    })
    .status(200);
});

app.use('/api/v1/', router());

app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT} in ${MODE} mode `);
});
