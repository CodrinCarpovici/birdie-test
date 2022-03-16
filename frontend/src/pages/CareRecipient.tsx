import BarChart from "../components/BarChart";
import Table from "../components/Table";
import { Container, Header } from "../styled/CareRecipient";

const CareRecipient = () => {
  return (
    <Container>
      <Header>Observations</Header>

      <Table />
      <BarChart />
    </Container>
  );
};

export default CareRecipient;
