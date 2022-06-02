import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './styles'

export const Navbar = () => {
  return(
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Bombasaro
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='works'>Trabalhos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contato</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'>Sobre</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Login</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
};