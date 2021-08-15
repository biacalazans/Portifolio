import "./navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import Logo from "../../assets/Logo.svg"
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,
 NavItem, NavLinks} from './NavBarElements'

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = (e) => {
    if (openMenu) setOpenMenu(false);
    else {
      setOpenMenu(true);
    }
  };

  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>CALAZANS</NavLogo>
      </NavbarContainer>
      <MobileIcon>
        <FaBars/>
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to='about'>Sobre mim</NavLinks>
        </NavItem>
      </NavMenu>
    </Nav>
    </>
  );
}

export default NavBar;
