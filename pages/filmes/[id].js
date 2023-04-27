import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";
import Link from "next/link";
import Fotos from "../../components/Fotos";

const Detalhes = ({ filme, atores }) => {
  return (
    <Pagina titulo={filme.title}>
      <Row>
        <Col md={3}>
          <Card style={{ padding: 5 }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
            />
          </Card>
        </Col>

        <Col md={9}>
          <Card style={{ background: "orange" }}>
            <p>
              <strong>Data de Lançamento: </strong>
              {new Date(filme.release_date).toLocaleDateString()}
            </p>
            <p>
              <strong>Orçamento: </strong>
              R${filme.budget.toFixed(2).replace(".", ",")}
            </p>
            <p>
              <strong>Duração: </strong>
              {filme.runtime} min
            </p>
            <p>
              <strong>Nota: </strong>
              {filme.vote_average.toFixed(1).replace(".", ",")}/10
            </p>
            <div>
              <strong>Gêneros: </strong>
              <ul>
                {filme.genres.map((item) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
            <p>{filme.overview}</p>
          </Card>
        </Col>
      </Row>

      <Fotos titulo="Elenco" lista={atores} foto="poster_path" />
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const resultado = await apiFilmes.get(`/movie/${id}?language=pt-BR`);
  const res = await apiFilmes.get(`/movie/${id}/credits?language=pt-BR`);

  const filme = await resultado.data;
  const generos = await filme.genres;
  const atores = await res.data.cast;
  return {
    props: { filme, generos, atores }, // will be passed to the page component as props
  };
}
