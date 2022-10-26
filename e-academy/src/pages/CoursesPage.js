import React from 'react'
import { Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import CourseThumb from '../components/common/CourseThumb';

const CoursesPage = () => {

    const allCourses = useLoaderData()

    console.log()

    const notify = () => toast.success('Successfully created!');


    return (
        <>
            <Container className='mt-5'>
                <Row className='mb-5'>
                    {
                        allCourses.map(courses => <CourseThumb key={courses.id} courses={courses} />)
                    }
                </Row>
            </Container>

            {/* <button onClick={notify}>Make me a toast</button> */}


        </>
    )
}

export default CoursesPage