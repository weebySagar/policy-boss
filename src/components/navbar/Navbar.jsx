import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar, Image } from "react-bootstrap";

import Logo from "@images/policy-logo.png";
import DropDownImage from "@images/dropdown-arrow.png";

import "@styles/navbar/_navbar.scss";

import { NavbarLogo } from "@components/navbar/NavbarLogo";
import { NavbarItem } from "@components/navbar/NavbarItem";
import Sidebar from "@components/sidebar/Sidebar";

const Header = () => {
  const navData = [
    {
      menuTitle: "Explore to Insure",
      subMenu: [
        "Car Insurance",
        "Bike Insurance",
        "Health Insurance",
        "Travel Insurance",
        "Commercial Vehicle",
      ],
    },
    {
      menuTitle: "Become a POSP",
    },
    {
      menuTitle: "Knowledge Center",
      subMenu: ["Blogs & Videos", "News Room"],
    },
    {
      menuTitle: "Contact Us",
      subMenu: [
        "customercare@policyboss.com",
        "1800 419 419 9",
        "Get in touch",
      ],
    },
  ];

  const accountLinksData = [
    {
      menuTitle: "Login",
      subMenu: ["Login Via Password", "Login Via App Token", "Login Via OTP"],
    },
    {
      menuTitle: "English",
      subMenu: ["English", "Hindi"],
    },
  ];

  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showDropdown = (index) => {
    setShow(index);
  };
  const hideDropdown = (e) => {
    setShow(null);
  };

  const handleOpenSidebar = () => {
    setShowMenu(true);
  };

  const handleCloseSidebar = ()=>{
    setShowMenu(false)
  }
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleOpenSidebar}
            />

            <Navbar.Brand href="#home">
              <Image src={Logo} />
            </Navbar.Brand>
          </div>
          <Nav className="mx-auto d-none d-lg-flex">
            {navData.map((link, index) =>
              link?.subMenu ? (
                <>
                  <NavDropdown
                    title={link.menuTitle}
                    id="basic-nav-dropdown"
                    key={link}
                    show={show === index}
                    onMouseEnter={() => showDropdown(index)}
                    onMouseLeave={hideDropdown}
                    className="nav-dropdown"
                  >
                    {link.subMenu.map((link) => (
                      <NavDropdown.Item key={link} href="#">
                        {link}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link key={link} href="#">
                  {link.menuTitle}
                </Nav.Link>
              )
            )}
          </Nav>
          <Nav>
            {accountLinksData.map((link) =>
              link.subMenu ? (
                <NavDropdown title={link.menuTitle}>
                  {link.subMenu.map((link) => (
                    <NavDropdown.Item>{link}</NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link key={link} href="#">
                  {link.menuTitle}
                </Nav.Link>
              )
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* SideBar for mobile devices */}
      <Sidebar showMenu={showMenu} handleCloseSidebar={handleCloseSidebar}>
        <Nav className="mx-auto flex-column">
          {navData.map((link, index) =>
            link?.subMenu ? (
              <>
                <NavDropdown
                  title={link.menuTitle}
                  id="basic-nav-dropdown"
                  key={link}
                  show={show === index}
                  onMouseEnter={() => showDropdown(index)}
                  onMouseLeave={hideDropdown}
                  className="nav-dropdown"
                >
                  {link.subMenu.map((link) => (
                    <NavDropdown.Item key={link} href="#">
                      {link}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </>
            ) : (
              <Nav.Link key={link} href="#">
                {link.menuTitle}
              </Nav.Link>
            )
          )}
        </Nav>
      </Sidebar>
    </header>
  );
};

export default Header;
