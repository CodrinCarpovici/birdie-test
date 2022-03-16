import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  background-color: #f3f7fd;
  position: relative;
`;

export const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00254d;
  font-size: 64px;
  font-weight: 900;
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 280px) {
    font-size: 24px;
  }
`;
