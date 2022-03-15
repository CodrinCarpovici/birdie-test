import {
  TableContainer,
  Container,
  StyledTable,
  TR,
  TH,
  TD,
} from "../styled/Table";
import { useEffect, useState } from "react";
import api from "../pages/api/posts";
import { useParams } from "react-router-dom";

const Table = () => {
  const {id} = useParams();
  const [tabledata, setTabledata] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/careRecipient/${id}/events/task_completed`
        );

        setTabledata(response.data);
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

  return (
    <Container>
      <TableContainer>
        <StyledTable>
          <thead>
            <TR>
              <TH>Time</TH>
              <TH>Task Notes</TH>
            </TR>
          </thead>
          {tabledata.map((val, index) => {
            return (
              <tbody>
                <TR key={index}>
                  <TD>{val.timestamp}</TD>
                  <TD>{JSON.parse(val.payload).task_definition_description}</TD>
                </TR>
              </tbody>
            );
          })}
        </StyledTable>
      </TableContainer>
    </Container>
  );
};

export default Table;
