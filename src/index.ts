import express from 'express';
import urlRouter from './routes/url';
import cors from 'cors';
import db from './utils/database';
import mongoose from 'mongoose';
import docs from './docs/url.route';

async function init() {
  try {
    const result = await db();
    console.log('Database status: ', result);
    console.log('Connected to: ', mongoose.connection.name);

    const app = express();

    const PORT = 3000;

    app.use(express.json());
    app.use(cors());

    //ditampilkan dihalaman utama
    app.get('/server', (req, res) => {
      res.status(200).json({
        message: 'Server is Running',
        data: null,
      });
    });

    app.use('/', urlRouter);
    docs(app);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/server`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
