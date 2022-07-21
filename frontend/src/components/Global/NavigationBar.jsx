import { Navbar, Container } from "react-bootstrap";
import NavLink from "./NavLink";
import Logo from "./Logo";

function NavigationBar() {
  return (
    <Navbar className="myNavBar" expand="sm" fixed="top">
      <Container>
        <Logo name={"ABHYAS"} />
        <NavLink />
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
