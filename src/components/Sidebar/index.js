import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggleSidebar} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar} to="discover">
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar} to="Services">
            Services
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar} to="signup">
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggleSidebar} to="/signin">
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
