import React, { useState } from "react";
import { fetchPensionValues } from "./utils/utils";
import ReactTooltip from "react-tooltip";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function TopBar(context) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/split">SplIt</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
