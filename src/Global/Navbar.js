import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar inverse>
      <Nav>
        <NavItem>
          <a href="#">fr0g.gg</a>
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <a href="#">log in</a>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
