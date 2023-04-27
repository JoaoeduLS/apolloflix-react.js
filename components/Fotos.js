import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

const Fotos = (props) => {
  return (
    <>
      {
        <h2 className="mt 3" style={{ color: "white" }}>
          <br></br>
          Title: {props.titulo}
        </h2>
      }
      <Row>
        {props.lista.map((item) => (
          <Col key={item.id} md={3} className="my-3">
            <Card className="p-1">
              <Link
                href={`../ator/${item.id}`}
                style={{ textDecoration: "none" }}
                className="text-black"
              >
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                />
                <Card.Title>
                  <em>{item.name}</em>
                </Card.Title>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Fotos;
