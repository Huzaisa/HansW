import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Group4 from "../assets/Group-4.png";
import Group3 from "../assets/Group-3.png";

const Home = () => {
  // State untuk menyimpan data menu dan keunggulan
  const [bestMenu, setBestMenu] = useState([]);
  const [bestMenu2, setBestMenu2] = useState([]);
  const [keunggulan, setKeunggulan] = useState([]);

  // Mengambil data menggunakan fetch API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data menu pertama
        const responseMenu = await fetch("http://localhost:5000/bestmenu");
        const dataMenu = await responseMenu.json();
        setBestMenu(dataMenu);

        // Fetch data menu kedua
        const responseMenu2 = await fetch("http://localhost:5000/bestmenu2");
        const dataMenu2 = await responseMenu2.json();
        setBestMenu2(dataMenu2);

        // Fetch data keunggulan
        const responseKeunggulan = await fetch("http://localhost:5000/keunggulan");
        const dataKeunggulan = await responseKeunggulan.json();
        setKeunggulan(dataKeunggulan);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty array untuk memastikan hanya sekali fetch saat pertama kali render

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

      <Row className="best-seller w-100 min-vh-100 d-flex">
        <h1>Best Seller</h1>
        <Col className="list-menu1">
          {bestMenu.length > 0 ? (
            bestMenu.map((menu) => (
              <p key={menu.id}>{menu.name}</p>
            ))
          ) : (
            <p>Loading best seller menu...</p>
          )}
        </Col>
        <Col className="list-menu2">
          {bestMenu2.length > 0 ? (
            bestMenu2.map((menu2) => (
              <p key={menu2.id}>{menu2.name}</p>
            ))
          ) : (
            <p>Loading second menu...</p>
          )}
        </Col>
      </Row>

      <Row className="keunggulan-box w-100 min-vh-100 d-flex">
        <h1 className="text-center my-3">Keunggulan</h1>
        {keunggulan.length > 0 ? (
          keunggulan.map((item, index) => (
            <Col key={index} className="teks-keunggulan">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Col>
          ))
        ) : (
          <p>Loading advantages...</p>
        )}
      </Row>
    </div>
  );
};

export default Home;