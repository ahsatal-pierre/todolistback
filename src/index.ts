import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// import routes from './routes';
import { createConnection, Connection } from 'mysql2/promise';
import bodyParser from 'body-parser';

const app: Express = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });



