import React, { useState } from 'react'
import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap'
import DarkModeToggle from "react-dark-mode-toggle";

const Menubar = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false); 

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src="logo.png" alt="e-academy" style={{ width: '50px' }} /> E-Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link >Courses</Nav.Link>
                        <Nav.Link>FAQ</Nav.Link>
                        <Nav.Link>Blog</Nav.Link>
                        <Nav.Link>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                checked={isDarkMode}
                                size={50}
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menubar