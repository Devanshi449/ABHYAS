import "./navigation.css";
import { Nav } from "react-bootstrap";

function Logo({ name }) {
  return (
    <Nav.Link href="/">
      <div className="logo display-5 font-weight-bold">{name}</div>
    </Nav.Link>
  );
}

export default Logo;
