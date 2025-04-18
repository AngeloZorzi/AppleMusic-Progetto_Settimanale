// src/components/CustomNavbarMobile.jsx
import { Navbar, Container, Button } from "react-bootstrap";
import { Menu } from "lucide-react";

const CustomNavbarMobile = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex d-lg-none justify-content-between align-items-center px-3 py-2"
      style={{ height: "56px" }}
    >
      <Button variant="link" className="p-0 text-white border-0">
        <Menu size={24} />
      </Button>

      <Navbar.Brand className="m-0 fs-5 fw-semibold">
        <span role="img" aria-label="apple">
          <img src="./assets/logos/apple.svg " alt="" />
        </span>
        Music
      </Navbar.Brand>

      <Button variant="link" className="p-0 text-danger fw-semibold border-0">
        Accedi
      </Button>
    </Navbar>
  );
};

export default CustomNavbarMobile;
