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

  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
  max-width: 110px;
  padding-left: 10px;

  @media (max-width: 768px) {
    max-width: 90px;
  }

  @media (max-width: 280px) {
    max-width: 60px;
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

  @media (max-width: 768px) {
    flex:2;
  }
`;

export const List = styled.ul``;

export const MenuItem = styled.a`
  margin: 0px 10px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 768px) {
    margin: 0px 5px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }

  @media (max-width: 280px) {
    font-size: 12px;
    margin: 0px 2px;
  }
`;
