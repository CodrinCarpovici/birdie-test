import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableContainer = styled.div`
  position: relative;
  margin: auto;
  height: 80vh;
  width: 90vw;
  max-height: 600px;
  display: flex;
  justify-content: center;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 2px solid #00254D;
  font-size: 16px;
  font-weight: 500;
`;

export const TR = styled.tr`
  border: 2px solid #00254D;
`;

export const TH = styled.th`
border: 2px solid #00254D;
  padding: 3px;
`;

export const TD = styled.td`
  text-align: center;
  border: 2px solid #00254D;
  padding: 3px;
`;
