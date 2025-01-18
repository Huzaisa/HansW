import '../styles/About.css';
import group4 from '../assets/Group-4.png';

function About() {
  return (
    <header className="about-section">
      <img className="background-image" src={group4} alt="Background" />

      {/* Konten di atas background */}
      {/* <div className="content">
        <h1>About Us</h1>
        <p>Welcome to our website! Discover more about us below.</p>
      </div> */}
    </header>
  );
}

export default About;
