import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyNavBar() {
  <>
    <Navbar bg="light" expand="lg">
      coucou
      <Container>
        coucou 2
        <Nav.Item>
          <Link to="/allQuotes"> Les citations </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/oneQuote"> Une citation</Link>
        </Nav.Item>
      </Container>
    </Navbar>
  </>;
}
