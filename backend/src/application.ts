import * as express from "express";
import { carerecipientController } from "./controllers/carerecipientController";
import { eventsController } from "./controllers/eventsController";
import { eventtypeController } from "./controllers/eventtypeController";
import { pingController } from "./controllers/ping";

import { db } from './dbenv'

const app = express();

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Care Recipient

app.use(carerecipientController);

//Events

app.use(eventsController);

//Event Data


app.use(pingController);

export default app;
