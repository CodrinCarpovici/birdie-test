import React from "react";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
  Link,
} from "../styled/Navbar";
import logo from "../static/logo.png";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link>
            <Logo src={logo}></Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem>HOME</MenuItem>
          <MenuItem>WILL</MenuItem>
          <MenuItem>DAISY</MenuItem>
          <MenuItem>JACK</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
