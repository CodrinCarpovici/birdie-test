import { ChartContainer, Container } from "../styled/BarChart";
import {
  Chart as ChartJS,
  BarElement,
  registerables,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import api from "../pages/api/posts";
import { useParams } from "react-router-dom";

ChartJS.register(...registerables, BarElement, LinearScale, CategoryScale);

const BarChart = () => {
  const { id } = useParams();
  const [chart, setChart] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/careRecipient/${id}/events/fluid_intake_observation`
        );

        setChart(response.data);
        /*setLoad(JSON.parse(response.data.payload).data);*/ //FIXX
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

    fetchData();
  }, []);

  const data = {
    labels: chart?.map((data) => data.timestamp),
    datasets: [
      {
        label: `${chart.length} Fluid Intake Observations`,
        data: chart?.map((data) => JSON.parse(data.payload).consumed_volume_ml),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 22,
      },
    },
  };

  return (
    <Container>
      <ChartContainer>
        <Bar data={data} options={options} height={400} />
      </ChartContainer>
    </Container>
  );
};

export default BarChart;
