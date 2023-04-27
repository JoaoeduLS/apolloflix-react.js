import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Cabecalho = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Início</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categoria" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Terro</NavDropdown.Item>
                <NavDropdown.Item href="">Ação</NavDropdown.Item>
                <NavDropdown.Item href="">Aventura</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/filmes">Filmes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
