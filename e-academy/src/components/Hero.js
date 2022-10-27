import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="ea-hero">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} md={12}>
                        <div className=' hero-textarea'>
                            <h6 className='txt-color-two mt-5'>DISTANCE LEARNING</h6>
                            <h2 className='text-dark fw-bold'>Feel Like You Are Attending Your Classes Physically!</h2>
                            <p>Vdemy training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>
                            <Link to='/courses' className='btn btn-secondary mt-3'>Explore</Link>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='hero-img-area'>
                            <img src="/hero.png" alt="banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero