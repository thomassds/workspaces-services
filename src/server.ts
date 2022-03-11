import "reflect-metadata";
import express from "express";
import dotenv from 'dotenv';

import "./database";
import { routes } from "./routes";
 
const app = express();

dotenv.config();

app.use(express.json());


app.use(routes);

app.listen(3333, () => console.log("Server is running"));