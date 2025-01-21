import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Group4 from "../assets/Group-4.png";
import Group5 from "../assets/Group-5.png";

const About = () => {
  const [about, setAbout] = useState([]); // Pastikan state bernama 'about'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/about");
        const data = await response.json();
        console.log(data); // Debugging
        setAbout(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="aboutpage">
      <Row className="w-100 min-vh-100 d-flex">
        <Col className="latarbelakang">
          <h1 className="">LATAR BELAKANG</h1>
          <p>
            Selamat datang di Hans Kongkow Warmindo, tempat terbaik untuk
            menikmati hidangan hangat dan suasana nyaman! Kami hadir sebagai
            destinasi kuliner yang menggabungkan cita rasa khas masakan
            Indonesia dengan suasana yang santai, cocok untuk berkumpul bersama
            teman atau keluarga.
          </p>
          <p>
            Di Hans Kongkow Warmindo, kami menyajikan berbagai menu favorit
            seperti mie instan spesial, nasi goreng, aneka snack, hingga
            minuman segar yang akan melengkapi momen kongkow Anda. Dengan
            suasana yang ramah dan pelayanan terbaik, kami ingin setiap
            kunjungan Anda menjadi pengalaman yang berkesan.
          </p>
          <p>
            Yuk, datang dan rasakan hangatnya kelezatan di Hans Kongkow
            Warmindo! Karena di sini, setiap rasa dan cerita bertemu. 🍜✨
          </p>
        </Col>
        <img className="bg-img" src={Group4} alt="group4" />
      </Row>

      <Container>
        <Row>
          <Col>
            {about.length > 0 ? (
              <div className="about-grid">
                {about.map((item) => (
                  <div key={item.id} className="about-item">
                    <h1>{item.type}</h1>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
        </Row>
      </Container>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8278566593626!2d106.41383789999999!3d-6.2863454999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42056befc80a79%3A0x9b2a319299093481!2sHans%20Kongkow%20Warmindo!5e0!3m2!1sen!2sid!4v1735831480034!5m2!1sen!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hans Kongkow Warmindo Location"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
