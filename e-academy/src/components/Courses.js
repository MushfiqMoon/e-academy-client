import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Courses = () => {

    const course = useLoaderData()
    const {title} = course

    console.log(course)
    return (
        <div>{title}</div>
    )
}

export default Courses