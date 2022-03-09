import * as express from "express";
import {pingController} from "./controllers/ping";
const mysql = require("mysql");

const app = express();

//DB Connection

const db = mysql.createConnection({
    host: "birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com",
    user: "test-read",
    password: "xnxPp6QfZbCYkY8",
    database: "birdietest",
  });
  
  
  //Care Recipient
  
  let recipientID;
  
  const setRecipientID = (results: any) => {
    recipientID = results;
  }
  
  app.get('/careRecipient', (_req, res) => {
    let sql =  `SELECT DISTINCT care_recipient_id from events`
    let query = db.query(sql, (err: any, results: any) => {
      if(err) {
        throw err
      }
      console.log(results);
      setRecipientID(results);
      res.send('Fetched care recipients')
    })
  })

app.use(pingController);

export default app;
