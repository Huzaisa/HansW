import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Gallery from "./pages/Gallery"
import About from "./pages/About"

function App() {
  return (
  <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/menu" Component={Menu}/>
      <Route path="/gallery" Component={Gallery}/>
    </Routes>
    <FooterComponent/>
  </div>
  )
}

export default App
