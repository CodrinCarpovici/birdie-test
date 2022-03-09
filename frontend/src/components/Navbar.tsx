import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  Link,
  List,
} from "../styled/Navbar";
import logo from "../static/logo.png";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Will", path: "/will" },
  { name: "Daisy", path: "/daisy" },
  { name: "Jack", path: "/jack" },
];

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link>
            <NavLink key="Home" to="/" className="current">
              <Logo src={logo}></Logo>
            </NavLink>
          </Link>
        </Left>
        <Right>
          <List>
            {links.map((link, index) => (
              <NavLink key={index} to={link.path} className="current">
                <li>{link.name}</li>
              </NavLink>
            ))}
          </List>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
