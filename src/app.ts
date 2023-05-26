import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './router';
import HandleError from './middlewares/handleErrors';

const app = express();

const whitelist = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.WHITELIST,
];

const corsOptions = {
  credentials: true,
  origin: (origin: any, callback: any) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  optionsSuccessStatus: 200,
};

//?app middlewares
app.use(cors(corsOptions));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

//?project intro '/' route
app.get('/', (req: express.Request, res: express.Response) => {
  res
    .json({
      Project: 'All In One Api',
      Version: '1.0.0',
      Developer: 'Asif Nihal',
    })
    .status(200);
});

//?app routes
app.use('/api/v1', router());

//?error handler middleware
app.use(HandleError);

export default app;
