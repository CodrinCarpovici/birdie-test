import * as express from "express";
import { db } from '../dbenv'

export const eventsController = express.Router();

eventsController.get(`/careRecipient/:care_recipient_id/events`, (_req, res) => {
  let sql = `SELECT DISTINCT event_type from events`;
  let query = db.query(sql, (err: any, results: any) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send(results);
  });
});

eventsController.get(`/careRecipient/:care_recipient_id/events/:event_type`, (_req, res) => {
    let event_type = _req.params.event_type;
    let care_recipient_id = _req.params.care_recipient_id;
    let sql = `SELECT payload from events WHERE event_type = '${event_type}' AND care_recipient_id = '${care_recipient_id}'`;
    let query = db.query(sql, [event_type], (err: any, results: any) => {
      if (err) {
        throw err;
      }
      console.log(results);
      res.send(results);
      
    });
  });