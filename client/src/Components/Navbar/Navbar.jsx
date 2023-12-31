import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiShoppingCart } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <Navbar expand="md" style={{ background: "rgb(236,239,236)" }}>
      <Container className="d-flex justify-space-between">
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <GiBookshelf style={{ fontSize: "30px", marginBottom: "10px" }} />{" "}
            <span>Books Library</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              style={{
                padding: "10px 40px",
                fontWeight: "400",
                fontSize: "20px",
              }}
              as={Link}
              to={"/"}
            >
              Home
            </Nav.Link>

            <Nav.Link
              style={{
                padding: "10px 40px",
                fontWeight: "400",
                fontSize: "20px",
              }}
              as={Link}
              to={"/book-details/7D6IDwAAQBAJ"}
            >
              Book Details
            </Nav.Link>
            <Nav.Link
              style={{
                padding: "10px 40px",
                fontWeight: "400",
                fontSize: "20px",
              }}
              as={Link}
              to={"/cart"}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link className="px-4" as={Link} to={"/cart"}>
              <GiShoppingCart style={{ fontSize: "30px" }} />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
