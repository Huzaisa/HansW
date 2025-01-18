import '../styles/Navbar.css'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <nav>
        <img className="hanslogo" src={logo} alt=""/>
        <div className="wrapper">
            <div className="logo">HANS KONGKOW WARMINDO</div>
            <div className="menu">
                <ul>
                    <li><a href="#home" className="nav-button">HOME</a></li>
                    <li><a href="#menu" className="nav-button">MENU</a></li>
                    <li><a href="#gallery" className="nav-button">GALLERY</a></li>
                    <li><a href="#about" className="nav-button">ABOUT</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
