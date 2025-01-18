import '../styles/Gallery.css'
import galeri from '../assets/image.png'
import galeri2 from '../assets/image-2.png'
import galeri3 from '../assets/image-3.png'
import galeri4 from '../assets/image-4.png'
import galeri5 from '../assets/image-5.png'
import galeri6 from '../assets/image-6.png'
import galeri7 from '../assets/image-7.png'
import group4 from '../assets/Group-4.png';

function Gallery() {
  return (
    <main className='galeri'>
      <img className="background-image" src={group4} alt="Background" />
        <img className="galeri1" src={galeri} alt=""/>
        <img className= "galeri2"src={galeri2} alt=""/>
        <img className= "galeri3"src={galeri3} alt=""/>
        <img className= "galeri4"src={galeri4} alt=""/>
        <img className= "galeri5"src={galeri5} alt=""/>
        <img className= "galeri6"src={galeri6} alt=""/>
        <img className= "galeri7"src={galeri7} alt=""/>
        
    </main>
  )
}

export default Gallery
