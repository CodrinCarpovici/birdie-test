import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  padding: 10px 30px;
  margin: 0px 20px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  margin-right: 20px;
  align-items: center;
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 110px;

  @media (max-width:768px) {
    max-width: 100px;
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: end;
`;

export const MenuItem = styled.a`
  margin: 0px 10px;
  cursor: pointer;
  font-size: 16px;
`;
