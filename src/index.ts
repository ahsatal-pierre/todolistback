import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// import routes from './routes';
import { createConnection, Connection } from 'mysql2/promise';
import bodyParser from 'body-parser';

declare global {
    namespace Express {
      interface Request {
        db: Connection;
      }
    }
  }

const app: Express = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());


  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };

  const createDbConnection = async (): Promise<Connection> => {
    try {
      const connection = await createConnection(dbConfig);
      console.log('Connected to the database');
      return connection;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  };

  createDbConnection()
  .then((connection) => {
    app.use((req, res, next) => {
      req.db = connection;
      next();
    });

    app.use(bodyParser.json());

    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });

    // app.use('/tasks', routes);

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Server initialization error:', error);
  });


  app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
  
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
