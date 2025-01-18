import '../styles/Menupg.css'
import gbrmenu from '../assets/gbrmenu.png'

function Menupg() {
  const menuItems = [
    {
      id: 1,
      image: gbrmenu,
      title: "NAMA MENU",
      description: "DESCRIPTION",
      price: "Rp X.000",
    },
    {
      id: 2,
      image: gbrmenu,
      title: "NAMA MENU",
      description: "DESCRIPTION",
      price: "Rp X.000",
    },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div className="menu-card" key={item.id}>
          <div className="search-bar">
        <input type="search" placeholder="Search menu..." />
          </div>

          {/* Gambar */}
          <div className="menu-image">
            <img src={item.image} alt={item.title} />
          </div>

          {/* Detail Menu */}
          <div className="menu-details">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="menu-footer">
              <span className="menu-price">{item.price}</span>
              <button className="menu-add">
                <span>+</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menupg
