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

  useEffect(() => {
    apiFilmes.get("/movie/popular").then((resultado) => {
      setFilmes(resultado.data.results);
    });
  }, []);

  return (
    <Pagina titulo="Filmes">
      <Row>
        {filmes.map((item) => (
          <Col key={item.id} md={3}>
            <Card>
              <Card.Img variant="top" src={item.poster_path} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Ano: <strong>{item.release_date}</strong>
                </Card.Text>
                <OverlayTrigger
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
