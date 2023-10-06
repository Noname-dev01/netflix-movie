import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
const JoinUser = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        marginBottom: "0",
        marginTop: "0",
      }}
    >
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            ID
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="id" placeholder="ID" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              코딩실력
            </Form.Label>
            <Col sm={10}>
              <Form.Check type="radio" label="코딩 상" name="formHorizontalRadios" id="formHorizontalRadios1" />
              <Form.Check type="radio" label="코딩 중" name="formHorizontalRadios" id="formHorizontalRadios2" />
              <Form.Check type="radio" label="코딩 하" name="formHorizontalRadios" id="formHorizontalRadios3" />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default JoinUser;
