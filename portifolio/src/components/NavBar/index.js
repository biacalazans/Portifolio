import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (e) => {
    setOpenMenu(true);
  };

  return (
    <header>
      <a href="#" className="logo">
        Beatriz Calazans
      </a>
      <button className="menu-toggle">
        <MenuIcon className="menu-icon" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Produções</a>
          </li>
          <li>
            <a href="#">Sobre o site</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </header>
  );
}

export default NavBar;
