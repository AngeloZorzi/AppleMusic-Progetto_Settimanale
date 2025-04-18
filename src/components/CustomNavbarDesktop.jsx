// src/components/CustomNavbarDesktop.jsx
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Search, Home, Music, Radio } from "lucide-react";

const CustomNavbarDesktop = () => {
  return (
    <Navbar
      style={{ width: "200px", minHeight: "100vh" }}
      bg="dark"
      variant="dark"
      className="d-none d-lg-flex flex-column align-items-start p-3 navbar-lg-vertical navbar-lg-wide flex-shrink-0 pino"
    >
      <Navbar.Brand as={Link} to="/" className="fw-bold mb-4">
        <img src="./assets/music.svg" alt="" />
      </Navbar.Brand>

      <Form className="d-flex mb-4 w-100">
        <FormControl type="search" placeholder="Cerca..." className="me-2" />
        <Button variant="outline-light">
          <Search size={18} />
        </Button>
      </Form>

      <Nav className="flex-column w-100">
        <Nav.Link
          as={Link}
          to="/"
          className="d-flex align-items-center text-white mb-2"
        >
          <Home size={20} className="me-2" />
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/playlist"
          className="d-flex align-items-center text-white mb-2"
        >
          <Music size={20} className="me-2" />
          Playlist
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/radio"
          className="d-flex align-items-center text-white mb-2"
        >
          <Radio size={20} className="me-2" />
          Radio
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbarDesktop;
