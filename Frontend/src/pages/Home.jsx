import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Group4 from "../assets/Group-4.png";
import Group3 from "../assets/Group-3.png";

const Home = () => {
  const [homePageItems, setHomePageItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/homePageItems");
        const data = await response.json();
        setHomePageItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1>
                HANS <br /> KONGKOW <br /> WARMINDO
              </h1>
              <p>KONGKOW KITA... KONGKOW SEDULURAN</p>
              <a
                href="https://maps.app.goo.gl/QXY7pewXktq7n71GA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link lokasi kami
              </a>
            </Col>
            <Col>
              <img src={Group4} alt="group4" />
              <img src={Group3} alt="group3" className="custom-group3" />
            </Col>
          </Row>
        </Container>
      </header>

      <Row className="w-100 min-vh-100 d-flex justify-content-center text-center">
        {homePageItems.length > 0 ? (
          homePageItems.map((item) => (
            <Col key={item.id} md={12} className="list-menu1 mb-4">
              <h1>{item.title}</h1>
              <p>{item.description}</p>

              {item.discount && (
                <p style={{ color: "red" }}>
                  Discount: {item.discount}% off
                </p>
              )}

              {item.bestSellers && item.bestSellers.length > 0 && (
                <div>
                  <h2>Best Sellers:</h2>
                  <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                      <ul className="list-items">
                        {item.bestSellers.slice(0, Math.ceil(item.bestSellers.length / 2)).map((bestSeller, index) => (
                          <li key={index} className="list-item">
                            {bestSeller}
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6} className="text-center">
                      <ul className="list-items">
                        {item.bestSellers.slice(Math.ceil(item.bestSellers.length / 2)).map((bestSeller, index) => (
                          <li key={index} className="list-item">
                            {bestSeller}
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </div>
              )}

              {/* New section: Keunggulan */}
              <div className="keunggulan-section mt-4">
                <h1>Keunggulan</h1>
                <p>
                  Harga yang sangat terjangkau, kenyamanan tempat, serta rasa yang tidak bisa dilupakan. 
                  Kami juga menyediakan berbagai varian makanan yang sangat beragam untuk dinikmati oleh semua pengunjung.
                </p>
              </div>
            </Col>
          ))
        ) : (
          <p>Loading home page items...</p>
        )}
      </Row>
    </div>
  );
};

export default Home;
