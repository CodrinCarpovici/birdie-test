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
import { useEffect, useState } from "react";
import api from "../pages/api/posts";



const Navbar = () => {
  
  const [recipient, setRecipient] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchRecipient = async () => {
        try {
          const response = await api.get("/careRecipient");
  
          setRecipient(response.data);
          console.log(recipient);
        } catch (err) {
          // Not in the 200 response range
          let errorMessage = "Failed to retrieve Recipients!";
          if (err instanceof Error) {
            errorMessage = err.message;
          }
          console.log(errorMessage);
        }
      };
  
      fetchRecipient();  
    }, []);
  
    const links = recipient?.map((data, index) => {
      const container = {};
  
      //@ts-ignore
      container.name = `Person${index + 1}`;
      //@ts-ignore
      container.path = `/recipient${index + 1}`;
  
      return container;
    });
  
    console.log(links);

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
            <NavLink key="Home" to="/" className="current">
            <li>Home</li>
            </NavLink>
            {links.map((link, index) => (
              //@ts-ignore
              <NavLink key={index} to={link.path} className="current">
                {/*@ts-ignore*/}
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
