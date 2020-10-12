import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logoImg from "../assets/MainLogo_Darkmode.png";
import { ButtonStyled } from "../styles/GlobalStyle";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="color" light expand="md">
        <img src={logoImg} alt="" style={{ height: "100px" }}></img>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                How It Works
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Logout
              </NavLink>
            </NavItem>
            <Link to="/create-campaign"><ButtonStyled> Start A New Beginning </ButtonStyled></Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
