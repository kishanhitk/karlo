import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const MobileMenuItem = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 50px;
`;
const slideFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
const MobileMenu = styled.div`
  animation: 0.3s ${slideFromRight} cubic-bezier(0.47, 0, 0.745, 0.715);
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  opacity: 0.9;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const Hamburger = styled.div`
  @media (max-width: 768px) {
    display: block;
  }
  display: none;
  cursor: pointer;
  padding: 20px;
  color: white;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: blue;
`;

const Navlink = styled(Link)`
  @media (max-width: 768px) {
    display: none;
  }
  text-decoration: none;
  padding: 20px;
  color: white;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const Navlinks = styled.div`
  display: flex;
`;

const Logo = styled.div`
  justify-self: flex-start;
  padding: 20px;
  color: white;
`;

function Navbar() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <>
      <NavContainer>
        <Logo>Karlo</Logo>
        <Navlinks>
          <Navlink to="/">About</Navlink>
          <Navlink to="/">Contact</Navlink>
          <Hamburger onClick={() => setshowMenu(!showMenu)}>
            {showMenu ? 'X' : '='}
          </Hamburger>
        </Navlinks>
      </NavContainer>
      {showMenu && (
        <MobileMenu>
          <MobileMenuItem to="/">About</MobileMenuItem>
          <MobileMenuItem to="/">Contact</MobileMenuItem>
        </MobileMenu>
      )}
    </>
  );
}

export default Navbar;
