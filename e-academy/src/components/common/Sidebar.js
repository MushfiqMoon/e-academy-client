import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])


    return (
        <ListGroup className='my-5'>
            {
                categories.map(cat => <ListGroup.Item key={cat.category_id}  variant="light"><Link to={`/category/${cat.category_id}`}>{cat.category_name}</Link></ListGroup.Item>)
            }
        </ListGroup>
    )
}

export default Sidebar