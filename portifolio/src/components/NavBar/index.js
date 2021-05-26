import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (e) => {
    if (openMenu) setOpenMenu(false);
    else {
      setOpenMenu(true);
    }
  };

  return (
    <header>
      <a href="#" className="logo">
        Beatriz Calazans
      </a>

      <button onClick={() => handleOpenMenu()} className="menu-toggle">
        <MenuIcon className="menu-icon" />
      </button>
      <nav className={openMenu ? "active" : ""}>
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
