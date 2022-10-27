import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBrain, FaDesktop, FaRegCheckSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className="servises py-5 bg-light">
            <Container>
                <div className='section-title'>
                    <h6 className='txt-color-two pt-5'>EDUCATION FOR EVERYONE</h6>
                    <h2 className='text-dark fw-bold'>Online Coaching Lessons For Remote Learning</h2>
                    <p>Grow your knowledge and your opportunities with thought leadership, training and tools.</p>
                </div>
                <Row className='py-5'>
                    <Col md={4} sm={12}>
                        <div class="single-features-box without-padding pe-5">
                            <div class="icon"><FaBrain className='fs-1 txt-color-two mb-4' /></div>
                            <h4 className='fw-bold'>Learn the Latest Skills</h4>
                            <p>There are many variations of passages of learnings are available, but the majority have suffered alteration.</p>
                            <Link to='/courses' className='fw-bold txt-color-one'>Explore</Link>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div class="single-features-box without-padding pe-5">
                            <div class="icon"><FaDesktop className='fs-1 txt-color-two mb-4' /></div>
                            <h4 className='fw-bold'>Go at Your Own Pace</h4>
                            <p>Grow your knowledge and your opportunities with thought leadership, training and tools.</p>
                            <Link to='/courses' className='fw-bold txt-color-one'>Explore</Link>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div class="single-features-box without-padding pe-5">
                            <div class="icon"><FaRegCheckSquare className='fs-1 txt-color-two mb-4' /></div>
                            <h4 className='fw-bold'>Learn the Latest Skills</h4>
                            <p>There are many variations of passages of learnings are available, but the majority have suffered alteration.</p>
                            <Link to='/courses' className='fw-bold txt-color-one'>Explore</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services