import React, { useState } from "react";
import { fetchPensionValues } from "../utils/utils";
import ReactTooltip from "react-tooltip";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function TopBar(context) {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
