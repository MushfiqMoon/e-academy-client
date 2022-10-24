import React from 'react'
import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap'

const Menubar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src="logo.png" alt="e-academy" style={{ width: '50px' }} /> E-Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link >More deets</Nav.Link>
                        <Nav.Link>Dank memes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menubar