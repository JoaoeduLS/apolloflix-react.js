import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import apiFilmes from "../../services/apiFilmes";
import {
  Row,
  Col,
  Card,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

const index = () => {
  const [filmes, setFilmes] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    apiFilmes
      .get(
        `/movie/popular/?api_key=68ab855709b33024448d00dc819063c4&language=pt-BR`
      )
      .then((resultado) => {
        setFilmes(resultado.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Pagina titulo="Filmes">
      <Row>
        {filmes.map((item) => (
          <Col key={item.id} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src={`${image_path}${item.poster_path}`}
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
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic">
                      <Popover.Header as="h3">Resumo</Popover.Header>
                      <Popover.Body>{item.overview}</Popover.Body>
                    </Popover>
                  }
                >
                  <Button variant="primary">Detalhes</Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
