import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

// Home Feed Profile

export const AppNav = () => {
  return (
    <Navbar inverse>
      <Nav>
        <NavItem>home</NavItem>
        <NavItem>feed</NavItem>
        <NavItem>account</NavItem>
        <NavItem>help</NavItem>
      </Nav>
    </Navbar>
  );
};
