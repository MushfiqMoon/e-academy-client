import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container fluid className='border-top bg-light'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 container">
                <p className=" mb-0">&copy; 2022 Mushfiq</p>

                <Link to="/" className='logo'>
                    <img src="/logo.png" width="50" alt="E-Academy" /> E-Academy
                </Link>

            </footer>
        </Container>
    )
}

export default Footer