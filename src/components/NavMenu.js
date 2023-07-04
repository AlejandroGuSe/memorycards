import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function NavMenu() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand>
            <img
              alt="logo"
              src={logo}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
