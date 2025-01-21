import { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, Form } from "react-bootstrap";
import Group6 from "../assets/Group-6.png";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch menu items dari backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu"); // Endpoint yang sesuai
        if (!response.ok) {
          throw new Error("Failed to fetch menu items");
        }
        const data = await response.json();
        setMenuItems(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Filter menu items berdasarkan searchTerm
  const filteredMenuItems = menuItems.filter((menu) =>
    menu.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <p>Loading menu items...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
            {filteredMenuItems.map((menu) => (
              <Col key={menu.id} xs={12} md={6} lg={4} className="menu-item mb-4">
                <div className="menu-card">
                  <div className="menu-image-container">
                    <img
                      className="menu-image"
                      src={`http://localhost:5000${menu.imageUrl}`}
                      alt={menu.name}
                    />
                  </div>
                  <div className="menu-details">
                    <h3 className="menu-title">{menu.name}</h3>
                    <p className="menu-description">{menu.description}</p>
                    <div className="menu-footer">
                      <div className="menu-price">Rp. {menu.price.toLocaleString("id-ID")}</div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <img className="bg-img" src={Group6} alt="group6" style={{ maxWidth: "100%" }} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Menu;
