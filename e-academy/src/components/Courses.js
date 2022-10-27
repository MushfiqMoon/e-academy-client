import React, { createRef } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import MiniHero from './common/MiniHero'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaFileInvoiceDollar, FaFilePdf, FaRegClock, FaRegStar, FaUsers } from 'react-icons/fa';

import Pdf from "react-to-pdf";
const ref = createRef();

const Courses = () => {

    const course = useLoaderData()
    const { id, title, thumbnail_url, price, duration, rating, total_view, details } = course

    return (
        <>


            <MiniHero title={title} />

            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='mt-5' ref={ref}>
                            <h3 className='fw-bold fs-2 mb-3'>Description</h3>
                            <p className='fs-5'>{details}</p>

                        </div>
                    </Col>
                    <Col lg={4}>
                        <Card className='p-2 bg-light'>
                            <Card.Img variant="top" src={thumbnail_url} />
                            <Card.Body>
                                <div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex'>
                                            <FaFileInvoiceDollar className='d-inline fs-5 txt-color-two me-2' />
                                            <h5 className='fw-bold'>Price</h5></div>
                                        <div className='txt-color-two fw-bold fs-3'>${price}</div>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex'>
                                            <FaRegStar className='d-inline fs-5 txt-color-two me-2' />
                                            <h5>Rating</h5></div>
                                        <div className='fw-bold fs-5'>{rating?.number}</div>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex'>
                                            <FaRegClock className='d-inline fs-5 txt-color-two me-2' />
                                            <h5>Duration</h5></div>
                                        <div className='fw-bold fs-5'>{duration}</div>
                                    </div>
                                    <hr />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex'>
                                            <FaUsers className='d-inline fs-5 txt-color-two me-2' />
                                            <h5>Student Enrolled</h5></div>
                                        <div className='fw-bold fs-5'>{total_view}</div>
                                    </div>
                                    <hr />
                                    <div className="d-grid gap-2">
                                        <Pdf targetRef={ref} filename="description.pdf">
                                            {({ toPdf }) => <Button className='btn btn-secondary mt-3' onClick={toPdf}><FaFilePdf className='d-inline me-2' /> Download Guideline</Button>}
                                        </Pdf>
                                        <Link to={`/chekout/${id}`} className='btn btn-secondary-outline my-2'>Get premium access</Link>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Courses