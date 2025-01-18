import { Container, Row, Col } from "react-bootstrap"
import Group4 from "../assets/Group-4.png"
import Group3 from "../assets/Group-3.png"
import { bestmenu,bestmenu2,keunggulanHans } from "../data/index"


const Home = () => {
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
          <a href="https://maps.app.goo.gl/QXY7pewXktq7n71GA" target="_blank" rel="noopener noreferrer">
            Link lokasi kami
          </a>
        </Col>
        <Col>
          <img src={Group4} alt="group4" />
          <img src={Group3} alt="group3" className="custom-group3"/>
        </Col>
      </Row>
    </Container>
    </header>

      <Row className="best-seller w-100 min-vh-100 d-flex">
      <h1>Best Seller</h1>
        <Col className="list-menu1">
        {bestmenu.map((menu) => {
          return (
            <p key={menu.id}>{menu.name}</p>
          )
        })}
            </Col>
            <Col className="list-menu2">
        {bestmenu2.map((menu2) => {
          return (
            <p key={menu2.id}>{menu2.name}</p>
          )
        })}
        </Col>
      </Row>
      <Row className="keunggulan-box w-100 min-vh-100 d-flex">
        <h1 className="text-center my-3">Keunggulan</h1>
        <Col className="teks-keunggulan">
          <h2>Harga Murah</h2>
          <p>Kami berkomitmen untuk memberikan layanan dan produk terbaik dengan harga yang ramah di kantong. Dengan berbagai pilihan paket hemat, Anda dapat menikmati pengalaman terbaik tanpa harus khawatir dengan anggaran.</p>
          </Col>
          <Col className="teks-keunggulan">
          <h2>Free Wifi & Karaoke</h2>
          <p>Kami memahami pentingnya konektivitas di era digital ini. Oleh karena itu, kami menyediakan free Wi-Fi untuk semua pelanggan, memungkinkan Anda tetap produktif, terhubung dengan keluarga dan teman, atau sekadar menikmati hiburan favorit Anda sambil bersantai.</p>
          </Col>
          <Col className="teks-keunggulan">
          <h2>Rasa Terjamin</h2>
          <p>Kami selalu mengutamakan kualitas dalam setiap sajian. Semua produk kami diracik dengan bahan-bahan segar dan berkualitas tinggi, serta diolah dengan standar kebersihan yang ketat</p>
          </Col>
  
      </Row>

    </div>
  )
}

export default Home
