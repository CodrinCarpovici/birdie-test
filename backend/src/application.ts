import * as express from "express";
import { carerecipientController } from "./controllers/carerecipientController";
import { eventsController } from "./controllers/eventsController";
import { pingController } from "./controllers/ping";

const app = express();

app.use(express.json());

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

//Ping

app.use(pingController);



export default app;
