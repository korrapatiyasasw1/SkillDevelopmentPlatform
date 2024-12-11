import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Define the styled header component
const Styled = styled.header`
  background-color:burlywood;
  color: white;
  padding: 0;
  margin:0;
  text-align: center;
  display:flex;
`;

const Div1 = styled.h1`
  background-color:red;
  font-size:20px;
`
const  Nav = styled.nav`
ul{
  display:flex;
  flex-direction:row;
  list-style:none;
  margin:0;
  padding:1.5rem;

li{
  margin:auto;
  padding:1.5rem;
}
}

` 


const Header = () => {
  return (

    <Styled>
      <Div1><h1>Talent Track</h1></Div1>
      <Nav>
        <nav>
        <ul>
          <li>
            <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"  style = {{color:'purple',textDecoration:'none'}}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" >
              Login
            </NavLink>
          </li>
        </ul>
        </nav>
      </Nav>
    </Styled>
  );
};

export default Header;
