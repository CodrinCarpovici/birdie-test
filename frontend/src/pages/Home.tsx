import React from "react";
import {
  Container,
  ImgContainer,
  InfoContainer,
  Wrapper,
  TextContainer,
  Title,
  Content,
  Button,
  ContentWrapper,
  BtnWrapper,
  Image,
  ImgWrapper,
} from "../styled/Home";

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
            <Button>WILL</Button>
            <Button>DAISY</Button>
            <Button>JACK</Button>
          </BtnWrapper>
        </ContentWrapper>
      </Content>
    </div>
  );
};

export default Home;
