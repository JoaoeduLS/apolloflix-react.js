import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagina from "../components/Pagina";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Pagina titulo="Página Inicial">
        <h2>Hello World</h2>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </Pagina>
    </>
  );
};

export default Home;
