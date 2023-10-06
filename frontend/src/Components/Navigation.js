import { Navbar, Container, Form, Button, Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigation({ black }) {
  return (
    <Navbar expand="lg" className={black ? "black" : ""}>
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <img
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link className="nav-itme" to="/">
              Home
            </Link>
            <Link className="nav-itme" to="/Movies">
              Movies
            </Link>
            <Link className="nav-itme" to="/login">
              Login
            </Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
