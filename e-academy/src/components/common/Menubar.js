import React, { useState } from 'react'
import {
    Container,
    Navbar,
    Nav,
} from 'react-bootstrap'
import DarkModeToggle from "react-dark-mode-toggle";
import { Link, NavLink } from 'react-router-dom';

const Menubar = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <>
           



            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Link to="/" className='text-white fw-bold'><img src="/logo.png" alt="e-academy" style={{ width: '50px' }} /> E-Academy</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/courses">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/faq'>FAQ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/account/login'>Login</NavLink>
                            </li>
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
        </>
    )
}

export default Menubar