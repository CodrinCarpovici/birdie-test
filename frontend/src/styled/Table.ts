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
  width: auto;
  max-width: 90vw;
  max-height: 600px;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 50px;
`;

export const SubHeader = styled.h2``;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: 2px solid #00254d;
  font-size: 16px;
  font-weight: 500;
  background-color: #e2f5f5;
`;

export const TR = styled.tr`
  border: 2px solid #00254d;
`;

export const TH = styled.th`
  border: 2px solid #00254d;
  padding: 3px;
`;

export const TD = styled.td`
  text-align: center;
  border: 2px solid #00254d;
  padding: 3px;
`;
