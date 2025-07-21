import express from 'express';
import router from './routes/api';
import cors from 'cors';
import db from "./utils/database";
import mongoose from 'mongoose';

async function init() {
  try {
    const result = await db();
    console.log('Database status: ', result);
    console.log('Connected to: ', mongoose.connection.name)

    const app = express();

    const PORT = 3000;

    app.use(cors());

    //ditampilkan dihalaman utama
    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Server is Running",
        data: null
      })
    })

    app.use('/api', router);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error)
  }
}

init();