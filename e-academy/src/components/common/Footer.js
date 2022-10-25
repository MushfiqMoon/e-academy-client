import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container fluid className='border-top bg-info mt-5'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 container text-white">
                <p className=" mb-0 text-white">&copy; 2022 Mushfiq</p>

                <a href="/" className="text-white text-decoration-none">
                    <img src="/logo.png" width="50" alt="E-Academy" /> E-Academy
                </a>

            </footer>
        </Container>
    )
}

export default Footer