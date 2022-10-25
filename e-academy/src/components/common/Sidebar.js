import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courseTitles, setCourseTitles] = useState([])  

    useEffect(() => {
        fetch(`https://b610-lerning-platform-server-side-mushfiq-moon.vercel.app/courses/all`)
            .then(res => res.json())
            .then(data => setCourseTitles(data))

    }, [])

    return (
        <ListGroup className='my-5'>
            {
                courseTitles.map(title => <ListGroup.Item key={title.id}  variant="light"><Link to={`/course/${title.id}`}>{title.title}</Link></ListGroup.Item>)
            }
        </ListGroup>
    )
}

export default Sidebar