import * as express from "express";
import { db } from '../dbenv'

export const eventtypeController = express.Router();

let events;

const setEvents = (results: any) => {
  events = results;
};

eventtypeController.get(`/careRecipient/:care_recipient_id/events/:event_type/payload`, (_req, res) => {
  let sql = `SELECT payload from events WHERE care_recipient_id = care_recipient_id AND event_type = event_type`;
  let query = db.query(sql, (err: any, results: any) => {
    if (err) {
      throw err;
    }
    console.log(results);
    setEvents(results);
    res.send(_req.params);
  });
});