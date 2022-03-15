import { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import Table from "../components/Table";
import { Container } from "../styled/CareRecipient";
import api from "./api/posts";
import { useParams } from "react-router-dom";

const CareRecipient = () => {
  const { id } = useParams();
  const [recipient, setRecipient] = useState<any[]>([]); //fix

  useEffect(() => {
    const fetchRecipient = async () => {
      try {
        const response = await api.get(`/careRecipient/${id}/events`);

        setRecipient(response.data);
        console.log(response.data);

        
      } catch (err) {
        // Not in the 200 response range
        let errorMessage = "Failed!";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.log(errorMessage);
      }
    };

    if(recipient) {
      fetchRecipient();
    }
  }, []);

  return (
    <Container>
      <BarChart />
      <Table />
    </Container>
  );
};

export default CareRecipient;
