import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(50vh - 65px);
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #00254d;
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 20px;
  font-size: 40px;
  font-weight: 700;
  color: white;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  left: auto;
  top: 0;
  right: 0;
  bottom: auto;
  width: 100%;

  position: relative;
  z-index: 1;
  background: linear-gradient(
      to left,
      rgba(84, 197, 193, 0.6),
      rgba(0, 37, 77, 0.9)
    ),
    url("https://images.pexels.com/photos/34761/old-people-couple-together-connected.jpg?auto=compress&cs=tinysrgb&h=750&w=1260")
      center;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  padding: 0px 10px;
  position: absolute;
  display: flex;
  text-align: center;
  z-index: 3;
  top: -80px;
  background: #54c5c1;
  color: white;
  border-radius: 7px;
  padding: 5px 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #f3f7fd;
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E2F5F5;
  border-radius: 7px;
`;

export const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 320px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;

export const Button = styled.button`
  background: #f1a92b;
  color: white;
  font-size: 40px;
  font-weight: 700;
  border-radius: 7px;
  border: none;
  margin: 20px 0px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
