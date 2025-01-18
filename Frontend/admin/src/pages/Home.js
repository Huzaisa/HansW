import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import foto1 from '../assets/Group-3.png'
import fotodsr from '../assets/Group-4.png'

import '../styles/Home.css'
import Gallery from "./Gallery"
import Menupg from "./Menupg"
import About from "./About"
function Home() {
  return (
    <>
    <main className="content">
        <img className="fotodsr" src={fotodsr} alt=""/>
        <img className= "foto1"src={foto1} alt=""/>
      </main>
    <Navbar/>
    <div className="wrapper">
    {/* Home */}
    <section id="home">
            <div className="kolom">
                <p className="deskripsi"></p>
                <p></p>
                <p></p>
                <h2>HANS</h2>
                <h2>KONGKOW</h2>
                <h2>WARMINDO</h2>
                <p></p>
                
                
            </div>
        </section>
    {/* menu */}
        <section id="menu">
            <div className="kolom">
                <p className="deskripsi"></p>
                <p className="deskripsi">MENU</p>
                
                
            </div>
        </section>
        <Menupg/>
        {/* gallery */}
        <section id="gallery">
            <div className="kolom">
                <p className="deskripsi">OUR GALLERY</p>
                
                
            </div>
        </section>
        <Gallery/>
        {/* About  */}
        <section id="about">
            <div className="kolom">
                <p className="deskripsi">ABOUT</p>               
            </div>
        </section>
        <About/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
