import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import MiniHero from './common/MiniHero'

const Courses = () => {

    const course = useLoaderData()
    const { id ,title } = course

    console.log(course)
    return (
        <>
            <MiniHero title={title} />
            <div>{title}</div>
            <div>{id}</div>
            <button><Link to={`/chekout/${id}`}> chekout</Link></button>
        </>
    )
}

export default Courses