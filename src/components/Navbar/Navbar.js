import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
  const [isMobileIconActive, setIsMobileIconActive] = useState(false);
  const [button, setButton] = useState(true);

  const handleMobileIcon = () => setIsMobileIconActive(!isMobileIconActive);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
              <NavIcon /> Hello, World!
            </NavLogo>
            <MobileIcon onClick={handleMobileIcon}>
              {isMobileIconActive ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleMobileIcon} click={isMobileIconActive ? 1 : 0}>
              <NavItem>
                <NavLinks to='/'>About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='skills'>Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects'>My projects</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='contact'>
                    <Button primary> Contact Me </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='contact'>
                    <Button fontBig primary>
                      Contact me
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
