import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Sobre mim</SidebarLink>
          <SidebarLink to="professional">Experiência</SidebarLink>
          <SidebarLink to="skills">Skills</SidebarLink>
          <SidebarLink to="productions">Produções</SidebarLink>
          <SidebarLink to="contact">Contato</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
