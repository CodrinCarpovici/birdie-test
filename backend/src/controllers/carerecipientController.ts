import * as express from "express";
import { db } from '../dbenv'


export const carerecipientController = express.Router();


carerecipientController.get("/careRecipient", (_req, res) => {
  let sql = `SELECT DISTINCT care_recipient_id from events`;
  let query = db.query(sql, (err: any, results: any) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

carerecipientController.get("/careRecipient/:care_recipient_id", (_req, res) => {
    let sql = `SELECT DISTINCT care_recipient_id from events`;
    let query = db.query(sql, (err: any, results: any) => {
      if (err) {
        throw err;
      }
      console.log(results);
      res.send(_req.params);
    });
  });
  

