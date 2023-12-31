import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './databases/data.js';
import Router from './routes/route.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended:true}))
app.use('/',Router);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running  ohh  successfully on PORT ${PORT}`));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);