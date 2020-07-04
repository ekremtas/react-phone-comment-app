import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/react-phone-comment-app/">
          BlueYorum.Com
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/react-phone-comment-app/">
                Homepage
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/phones">
                Phones
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/add-phone">
                Add Phone
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>React Phone Comment Application</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
