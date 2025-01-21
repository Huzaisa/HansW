import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Group4 from "../assets/Group-4.png";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);

  // Fetch gallery data from backend
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await fetch("http://localhost:5000/gallery"); // Pastikan URL sesuai dengan endpoint backend
        const data = await response.json();
        console.log("Fetched gallery data:", data); // Debugging untuk melihat struktur data
        setGalleries(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleries();
  }, []);

  return (
    <div className="gallery min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-200">OUR GALLERY</h1>
          </Col>
        </Row>
        <Row className="box-gallery">
          {galleries.map((galeri) => {
            const images = Array.isArray(galeri.images) ? galeri.images : [];
            return (
              <Col key={galeri.id} md={4} className="mb-4">
                <div className="gallery-item">
                  <p>{galeri.name}</p>
                  <p>{galeri.eventDate}</p>
                  <div className="gallery-images-wrapper">
                    {images.length > 0 ? (
                      images.map((image, index) => (
                        <div className="image-container" key={index}>
                          <img
                            className={`gallery-image image-${index + 1}`}
                            src={`http://localhost:5000${image}`}
                            alt={`Archive event ${index + 1}`}
                          />
                        </div>
                      ))
                    ) : (
                      <p>No images available for this gallery.</p>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <div className="footer-image-wrapper">
              <img className="bg-img" src={Group4} alt="Group 4" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
