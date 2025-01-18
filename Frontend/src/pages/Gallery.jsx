import { Container, Row, Col } from "react-bootstrap"
import { galleryHans } from "../data/index"
import Group4 from "../assets/Group-4.png"

const Gallery = () => {
  return (
    <div className="gallery min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-200">OUR GALLERY</h1>
          </Col>
          <Row className="box-gallery">
          {galleryHans.map((galeri) => (
            <div key={galeri.id}>
              <p>{galeri.title} <br />{galeri.date}</p>
              <img className="image1" src={galeri.image1} alt="archive event 1" />
              <img className="image2" src={galeri.image2} alt="archive event 2" />
              <img className="image3" src={galeri.image3} alt="archive event 3" />
              <img className="image4" src={galeri.image4} alt="archive event 4" />
            </div>
          ))}
          </Row>
          <Col>
          <img className="bg-img" src={Group4} alt="group4" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery
