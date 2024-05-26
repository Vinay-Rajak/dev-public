import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link to="/" className="text-gray-900 font-black no-underline">
            {" "}
            UIT-RGPV{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  ">
            <Nav.Link>
              <Link to="/" className="text-gray-900  no-underline">
                Home{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/About" className="text-gray-900  no-underline">
                About{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/student" className="text-gray-900  no-underline">
                Student{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/faculty" className="text-gray-900  no-underline">
                Faculty{" "}
              </Link>
            </Nav.Link>{" "}
            <Nav.Link>
              <Link to="/academic" className="text-gray-900  no-underline">
                Academic{" "}
              </Link>
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/research" className="text-gray-900  no-underline">
                  Research{" "}
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/placement" className="text-gray-900  no-underline">
                  Placement{" "}
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
  </NavDropdown.Item>*/}
            </NavDropdown>
            <Nav.Link>
              <Link to="/contact" className="text-gray-900  no-underline">
                Contact{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" className="text-gray-900  no-underline">
                Login/Sign-Up{" "}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
