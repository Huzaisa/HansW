import {Navbar, Container, Nav} from "react-bootstrap"

import { navLinks } from "../data/index"
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png"

const NavbarComponent = () => {
  return (
    <div>
     <Navbar bg="black" expand="lg" className="navbar fixed-top">
        <Navbar.Brand href="#home" className="navbar-brand-custom"><img src={logo} width="90" height="50" alt="logo" />HANS KONGKOW WARMINDO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => {
              return( 
              <div className="nav-link" key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </div>
            );
            })}
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
