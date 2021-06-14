import React from "react";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">Dolla</Navlogo>
          <MobileIcon onClick={toggleSidebar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
