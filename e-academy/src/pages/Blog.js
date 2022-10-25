import React from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
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
        </>
    )
}

export default Blog