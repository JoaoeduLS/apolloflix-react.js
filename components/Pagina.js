import React from "react";
import Cabecalho from "./Cabecalho";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagina = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "#212529" }}>
        <Cabecalho />
        <div
          className="py-4 text-white text-center mb-2"
          style={{ backgroundColor: "orange" }}
        >
          <Container>
            <h1 className="text-black">{props.titulo}</h1>
          </Container>
        </div>
        <Container className="mb-5 pb-3">{props.children}</Container>
        <div
          style={{ width: "100%", backgroundColor: "orange" }}
          className=" position-static bottom-0 py-2 text-black text-center"
        >
          <p>Todos os direitos reservados®</p>
        </div>
      </div>
    </>
  );
};

export default Pagina;
