import { Nav } from "react-bootstrap";
import "./navigation.css";

function NavLink() {
  return (
    <Nav className="navigationLinks">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contribute">Contribute</Nav.Link>
      <Nav.Link href="/AboutUs">About</Nav.Link>
      <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
    </Nav>
  );
}

export default NavLink;
