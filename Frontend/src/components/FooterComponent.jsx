import iconinsta from "../assets/Icon-Insta.png"
import iconwa from "../assets/Icon-WA.png"

const Footer = () => {
  return (
    <div id="copyright">
      <div className="icon-wrapper">
      <img src={iconinsta} alt="insta" className="iconinsta" />
      <img src={iconwa} alt="wa" className="iconwa"/>
      </div>
      Created by <b>Hanskongkow.</b> |  &copy; 2024
    </div>
  )
}

export default Footer
