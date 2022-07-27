import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const bodyParser = require("body-parser");

import router from './router'

const app: Express = express();
const port = '8080';

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', router);

mongoose.connect('mongodb://localhost:27017/vegguide', () => {
  console.log('connected');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});