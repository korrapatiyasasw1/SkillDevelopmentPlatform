import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Styled = styled.header`
  background-color: #00B1AA;
  color: white;
  padding: 5px;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Div1 = styled.div`
  font-size: 1.5rem;
  font-style: italic;
  padding: 10px;
  color: white;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 1.5rem;
  }
  li {
    margin: 0 15px;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: purple;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  font-style: italic;

  &:hover {
    color: darkorchid; 
  }

  &.active {
    color: #ff6347; 
  }
`;

const Header = () => {
  return (
    <Styled>
      <Div1>
        <h1>Talent Track</h1>
      </Div1>
      <Nav>
        <ul>
           {/* <li>
            <StyledNavLink exact to="/" activeClassName="active">
              Home
            </StyledNavLink>
          </li> */}
          {/* <li>
            <StyledNavLink to="/About" activeClassName="active">
              About
            </StyledNavLink>
          </li> */}
          <li>
            <StyledNavLink to="/signup" activeClassName="active">
              Signup
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/login" activeClassName="active">
              Login
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/AdminSignup" activeClassName="active">
               AdminSignup
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/Adminlogin" activeClassName="active">
             AdminLogin
            </StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/AdminDashBoard" activeClassName="active">
             AdminDashBoard
            </StyledNavLink>
          </li> */}
          {/* <li>
            <StyledNavLink to="/dashboard" activeClassName="active">
              Dashboard
            </StyledNavLink>
          </li> */}
        </ul>
      </Nav>
    </Styled>
  );
};

export default Header;
