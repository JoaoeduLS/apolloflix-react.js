import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFilmes from "../../services/apiFilmes";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import React from "react";

const index = ({ filme }) => {
  return (
    <Pagina titulo="Filmes">
      <Row>
        {filme.genres.map((item) => (
          <Col key={item.id}></Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
// Formatar a Data
export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(`/genre/movie/list/?language=pt-BR`);
  const filmes = await resultado.data.results;
  const filme = await resultado.data;
  return {
    props: { filmes, filme }, // will be passed to the page component as props
  };
}
