import { Routes, Route, useLocation } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import Loginpage from "./pages/Loginpage";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import Gallerypage from "./pages/Gallerypage";
import Accountpage from "./pages/Accountpage";

const App = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <div>
      {!isLoginPage && <NavbarComponent />}

      <Routes>
        <Route path="/" Component={Loginpage} />
        <Route path="/about" Component={Aboutpage} />
        <Route path="/account" Component={Accountpage} />
        <Route path="/home" Component={Homepage} />
        <Route path="/gallery" Component={Gallerypage} />
        <Route path="/menu" Component={Menupage} />
      </Routes>
    </div>
  );
};

export default App;
