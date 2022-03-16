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
  const { id } = useParams();
  const { eventid } = useParams();
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
  }, [id, eventid]);

  return (
    <Container>
      <TableContainer>
        <StyledTable>
          <thead>
            <TR>
              <TH>Time</TH>
              <TH>Tasks Completed Notes</TH>
            </TR>
          </thead>
          <tbody>
            {tabledata.map((val, index) => {
              //@ts-ignore
              const formatDate = (dateString) => {
                let date = new Date(dateString);
                //@ts-ignore
                return new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "medium",
                }).format(date);
              };
              return (
                <TR key={index}>
                  <TD>{formatDate(val.timestamp)}</TD>
                  <TD>{JSON.parse(val.payload).task_definition_description}</TD>
                </TR>
              );
            })}
          </tbody>
        </StyledTable>
      </TableContainer>
    </Container>
  );
};

export default Table;
