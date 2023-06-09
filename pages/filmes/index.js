import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFilmes from "../../services/apiFilmes";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const index = ({ filmes, filme }) => {
  return (
    <Pagina titulo="Filmes">
      <Row className="px-1 mx-1">
        {filmes.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                style={{ Width: "100%", height: "100%" }}
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                alt={item.title}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Lançamento-
                  <strong>
                    {new Date(item.release_date).toLocaleDateString()}
                  </strong>
                </Card.Text>
                <p>
                  <strong>Nota: </strong>
                  {item.vote_average.toFixed(1).replace(".", ",")}
                </p>
                {/* <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">Descrição</Popover.Header>
                      <Popover.Body>{item.overview}</Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="primary">Detalhes</Button>
                </OverlayTrigger> */}
                <Link href={"/filmes/" + item.id} className="btn btn-dark">
                  Detalhes
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
// Formatar a Data
export async function getServerSideProps(context) {
  const resultado = await apiFilmes.get(`/movie/popular/?language=pt-BR`);
  const filmes = await resultado.data.results;
  const filme = await resultado.data;
  return {
    props: { filmes, filme }, // will be passed to the page component as props
  };
}
