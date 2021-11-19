import React, { useContext } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './Header.css';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';


const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const handleLogin = ()=>{
    history.push('/login');
  }
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand className="logo-name" href="#">URBAN RIDERS</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto"
        style={{ maxHeight: '100px' ,padding:'0px 25px'}}
        navbarScroll
      >
      <Nav.Link to=""className="nav-pad" href="/home">Home</Nav.Link>
      <Nav.Link to=""className="nav-pad" href="/destination">Destination</Nav.Link>
      <Nav.Link to=""className="nav-pad" href="/blog">Blog</Nav.Link>
      <Nav.Link to=""className="nav-pad" href="/contact">Contact</Nav.Link>
      <Button variant="outline-success" href="/login">{}</Button>
      
      {/* <Button onClick={handleLogin} variant="outline-success">Login</Button>
      <Button variant="outline-success">Login</Button> */}
      {/* <LinkContainer to="/login"><Button variant="outline-success">Login</Button></LinkContainer> */}

        
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;