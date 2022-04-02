import React from "react";
import { Navbar, Nav, Container ,NavDropdown} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import './Nevigation.css';
import user from './download.png'
function Nevigation() {
  
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("user_id");
  if (isLoggedIn == null) {
    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#5B67CD' }}>
        <Container fluid>
          <Navbar.Brand >Vaccination Slot Booking</Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
  else {
    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#5B67CD' }} className="mb-3">
        <Container fluid>
          <Navbar.Brand >Vaccination Slot Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto "></Nav>
            <Nav fill variant="tabs" activeKey={location.pathname} >
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/booked_userdetails">User deails</Nav.Link>
              <Nav.Link href="/book_slot">Book slot</Nav.Link>
              <NavDropdown title={<img src={user} height="30px" />} className=" pull-end" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/my_profile">My profile</NavDropdown.Item>
                <NavDropdown.Item href="/edit_profile">Edit profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default Nevigation
