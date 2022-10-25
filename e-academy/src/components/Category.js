import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'
import CourseThumb from './common/CourseThumb'

const Category = () => {
    
    const allCourses = useLoaderData()

    return (
        <Container>
            <Row className='mt-5'>
                {
                    allCourses.map(courses => <CourseThumb key={courses.id} courses={courses} />)
                }
            </Row>
        </Container>
    )
}

export default Category