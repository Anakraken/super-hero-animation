import React from 'react'
import {
  NavbarContainer,
  NavbarContent,
  NavLogo,
  NavLinks,
  NavItem
}from './Navbar_styles';

const Navbar = () => {
  return (
    <NavbarContainer className="navbar">
      <NavbarContent className="navbar__content">
        
        <NavLogo src="https://i.ibb.co/MMmDPXN/lego.png" alt="logo" />
        <NavLinks>
          <NavItem><a href="/">EXCLUSIVOS</a></NavItem>
          <NavItem><a href="/">NUEVOS</a></NavItem>
          <NavItem><a href="/">GIFT CARDS</a></NavItem>
          <NavItem><a href="/">FIND A STORE</a></NavItem>
        </NavLinks>
        
      </NavbarContent>
    </NavbarContainer>
  )
};

export default Navbar;
