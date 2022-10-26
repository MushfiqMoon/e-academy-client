import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/common/Footer'
import Menubar from '../components/common/Menubar'
import MiniHero from '../components/common/MiniHero'

const Blog = () => {
    return (
        <>
            <Menubar />
            <MiniHero title={'Our Exciting Blogs'} />
            <Container>
                <Row>
                    <Col>
                        <h3>Blog</h3>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Blog