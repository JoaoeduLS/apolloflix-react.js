import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFilmes from "../../services/apiFilmes";
import { Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

const index = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    apiFilmes
      .get(`/movie/popular/`)
      .then((resultado) => {
        setFilmes(resultado.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // Formatar a Data

  return (
    <Pagina titulo="Filmes">
      <Row>
        {filmes.map((item) => (
          <Col key={item.id} md={3}>
            <Card>
              <Card.Img
                variant="top"
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
                <Link href={"/filmes/" + item.id} className="btn btn-danger">
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
