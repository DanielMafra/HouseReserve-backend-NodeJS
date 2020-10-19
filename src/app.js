import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import routes from './routes';

class App {

  constructor() {
    this.server = express();
    mongoose.connect('YOUR_MONGODB_CONNECTION_URL', { //Your MongoDB connection URL
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;