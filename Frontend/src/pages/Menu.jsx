import { useState } from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import { menuItems } from "../data/index.js";
import Group6 from "../assets/Group-6.png"

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter menuItems berdasarkan searchTerm
  const filteredMenuItems = menuItems.filter((menu) =>
    menu.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-page">
      <div className="menu w-100 min-vh-100 d-flex">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              <InputGroup className="search-bar mb-3" style={{ maxWidth: "300px" }}>
                <Form.Control
                  placeholder="Search ..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            {filteredMenuItems.map((menu) => {
              return (
                <Row key={menu.id} className="menu-item">
                  <Col className="kotak-img d-flex justify-content-center">
                    <img className="menu-image" src={menu.image} alt="gambar menu" />
                  </Col>
                  <Col className="menu-details">
                    <h3 className="menu-title">{menu.title}</h3>
                    <p className="menu-description">{menu.description}</p>
                    <div className="menu-footer">
                      <div className="menu-price">Rp. {menu.price}</div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Row>
          <Col>
          <img className="bg-img" src={Group6} alt="group6" />
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Menu;
