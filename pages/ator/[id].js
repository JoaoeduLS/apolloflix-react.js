import React from "react";
import Pagina from "../../components/Pagina";
import apiFilmes from "../../services/apiFilmes";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

const index = ({ ator, imagens, movie, serie }) => {
  return (
    <Pagina titulo={ator.name}>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`}
              alt={ator.name}
            />
          </Card>
        </Col>

        <Col md={9}>
          <Card style={{ backgroundColor: "orange" }}>
            <Col md={12} className="text-start p-3" style={{ color: "black" }}>
              <p>
                <strong>Data de Nascimento: </strong>{" "}
                {new Date(ator.birthday).toLocaleDateString()}
              </p>
              <p>
                <strong>Local de Nascimento: </strong>
                {ator.place_of_birth}
              </p>
              {ator.biography ? <p>{ator.biography}</p> : <></>}
              <Row>
                <h2>Imagens</h2>
                {imagens.profiles.map((item) => (
                  <Col>
                    <Card.Img
                      style={{ width: "5rem" }}
                      src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
      <h1 style={{ marginTop: 30, marginBottom: 30, color: "white" }}>
        <strong>Filmes</strong>
      </h1>
      <Row>
        {movie.cast.map((item) => (
          <Col key={item.id}>
            <Link href={"/filmes/" + item.id}>
              <Card.Img
                style={{ width: "12rem", marginBottom: 30 }}
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            </Link>
          </Col>
        ))}
      </Row>
      <h1 style={{ marginTop: 30, marginBottom: 30, color: "white" }}>
        <strong>Séries</strong>
      </h1>
      <Row>
        {serie.cast.map((item) => (
          <Col key={item.id}>
            <Card.Img
              style={{ width: "12rem", marginBottom: 30 }}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiFilmes.get(`/person/${id}?language=pt-BR`);
  const resImagens = await apiFilmes.get(`/person/${id}/images`);
  const resMovie = await apiFilmes.get(`/person/${id}/movie_credits`);
  const resSerie = await apiFilmes.get(`/person/${id}/tv_credits`);
  const ator = await resultado.data;
  const imagens = await resImagens.data;
  const movie = await resMovie.data;
  const serie = await resSerie.data;

  return {
    props: { ator, imagens, movie, serie },
  };
}
