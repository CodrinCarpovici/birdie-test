import { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container } from "../styled/CareRecipient";
import api from "./api/posts";

const CareRecipient = () => {
  const [recipient, setRecipient] = useState<any[]>([]); //fix

  useEffect(() => {
    const fetchRecipient = async () => {
      try {
        const response = await api.get("/careRecipient");

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

    fetchRecipient();
  }, []);

  return (
    <Container>
      <BarChart />
    </Container>
  );
};

export default CareRecipient;
