import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../assets/ipl-logo.png";

function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Navbar.Brand href="/">
                <img src={logo} alt="IPL Logo" width="40" height="40" className="me-2" />
                IPL Live
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#schedule">Schedule</Nav.Link>
                    <Nav.Link href="#table">Table</Nav.Link>
                </Nav>
                <Form className="d-flex ms-3">
                    <FormControl type="search" placeholder="Search..." className="me-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;
