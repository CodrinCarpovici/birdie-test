import { ArrowForwardOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  ImgContainer,
  InfoContainer,
  Wrapper,
  TextContainer,
  Title,
  Content,
  ContentWrapper,
  BtnWrapper,
  Image,
  ImgWrapper,
} from "../styled/Home";

const links = [
  { name: "Will", path: "/will" },
  { name: "Daisy", path: "/daisy" },
  { name: "Jack", path: "/jack" },
];

const Home = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <InfoContainer>
            <TextContainer>
              Select the Family Member for which you would like to check the
              observations
            </TextContainer>
          </InfoContainer>
          <ImgContainer></ImgContainer>
        </Wrapper>
      </Container>
      <Container>
        <Title>Family Members</Title>
      </Container>
      <Content>
        <ContentWrapper>
          <ImgWrapper>
            <Image src="https://assets.website-files.com/5d80c03f1edd7bd68fcdb623/61deb51d9292f42bf6698bf0_Partnership_v2%201.svg" />
          </ImgWrapper>
          <BtnWrapper>
          {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="current"
              >
                <li>{link.name}<ArrowForwardOutlined fontSize="medium"/></li>
              </NavLink>
            ))}
          </BtnWrapper>
        </ContentWrapper>
      </Content>
    </div>
  );
};

export default Home;
