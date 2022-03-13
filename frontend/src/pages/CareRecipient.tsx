import React, { useState, useEffect } from "react";
import BarChart from "../components/BarChart";
import { Container } from "../styled/CareRecipient";
import axios from "axios";
import api from "./api/posts";

const CareRecipient = () => {
  const [posts, setPosts] = useState<any[]>([]); //fix

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/careRecipient/df50cac5-293c-490d-a06c-ee26796f850d/events/physical_health_observation");

        setPosts(response.data);
      } catch (err) {
        // Not in the 200 response range
        let errorMessage = "Failed!";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.log(errorMessage);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <BarChart />
      {posts.map(post => <li key={post.care_recipient_id}>{post.event_type }</li>)}
    </Container>
  );
};

export default CareRecipient;
