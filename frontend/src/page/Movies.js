import React from "react";
import MovieList from "../Components/MovieList";
import { Row, Col, Container } from "react-bootstrap";

const Movies = () => {
  return (
    <div className="movielist-container">
      <Container>
        <Row>
          <Col>
            <MovieList></MovieList>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
