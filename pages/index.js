import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const array = ["oi"];
  return (
    <Pagina titulo="Página Inicial">
      <Row>
        {array.map((item) => (
          <Col>
            <p>{item}</p>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default Home;
