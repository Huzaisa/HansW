import {Navbar, Container, Nav} from "react-bootstrap"

import { Link } from "react-router-dom"

import logo from "../assets/logo.png"

const NavbarComponent = () => {
  return (
    <div>
        <Navbar
    expand="lg"
    className="navbar flex-column vh-90 position-fixed"
    style={{ width: "250px", paddingTop: "20px" }}>
        <Navbar.Brand href="#home" className="text-start ps-4" style={{ marginBottom: "20px", color: "white" }}><img className="logoHans" src={logo} width="90" height="50" alt="logo" />
          Hans Kongkow
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column h-100">
          <Nav className="flex-column w-100">
            <Link to="/home" className="nav-link py-2 px-3">
              Home
            </Link>
            <Link to="/menu" className="nav-link py-2 px-3">
              Menu
            </Link>
            <Link to="/gallery" className="nav-link py-2 px-3">
              Gallery
            </Link>
            <Link to="/about" className="nav-link py-2 px-3">
              About
            </Link>
            <Link to="/account" className="nav-link py-2 px-3">
              Account
            </Link>
          </Nav>
          <div className="mt-auto text-center pb-3">
          <button className="custom-button">LOG OUT</button>
          </div>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default NavbarComponent