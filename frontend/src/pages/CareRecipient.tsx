import { useState, useEffect, SetStateAction } from "react";
import BarChart from "../components/BarChart";
import Table from "../components/Table";
import { Container } from "../styled/CareRecipient";
import api from "./api/posts";
import { useParams, NavLink } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const CareRecipient = () => {
  const { id } = useParams();

  const [recipient, setRecipient] = useState<any[]>([]);
  const [event, setEvent] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipient = async () => {
      try {
        const response = await api.get(`/careRecipient/${id}/events`);

        setRecipient(response.data);
      } catch (err) {
        // Not in the 200 response range
        let errorMessage = "Failed!";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.log(errorMessage);
      }
    };

    if (recipient) {
      fetchRecipient();
    }
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/careRecipient/${id}/events`);

        setEvent(response.data);
      } catch (err) {
        // Not in the 200 response range
        let errorMessage = "Failed!";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.log(errorMessage);
      }
    };

    if (recipient) {
      fetchEvent();
    }
  }, []);

  return (
    <Container>
      {event.map((link, index) => (
        //@ts-ignore
        
        <NavLink
          key={index}
          to={`/person/${link.care_recipient_id}/events/${link.event_type}`} //FIXX
          className="current"
        >
          {/*@ts-ignore*/}
          <li>Event{index + 1}</li>
        </NavLink>
      ))}
      <BarChart />
      <Table />
    </Container>
  );
};

export default CareRecipient;
