import { ArrowForwardOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
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
import api from "./api/posts";

const Home = () => {
  const [recipient, setRecipient] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipient = async () => {
      try {
        const response = await api.get("/careRecipient");

        setRecipient(response.data);
        console.log(recipient);
      } catch (err) {
        // Not in the 200 response range
        let errorMessage = "Failed!";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.log(errorMessage);
      }
    };

    fetchRecipient();
  }, []);

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
            {recipient?.map((link, index) => (
              <NavLink
                key={index}
                //@ts-ignore
                to={`/person/${link.care_recipient_id}`}
                className="current"
              >
                <li>
                  {/*@ts-ignore*/}
                  PERSON{index + 1}
                  <ArrowForwardOutlined fontSize="medium" />
                </li>
              </NavLink>
            ))}
          </BtnWrapper>
        </ContentWrapper>
      </Content>
    </div>
  );
};

export default Home;
