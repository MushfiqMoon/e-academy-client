import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MiniHero from './common/MiniHero'

const Courses = () => {

    const course = useLoaderData()
    const { title } = course

    console.log(course)
    return (
        <>
            <MiniHero title={title} />
            <div>{title}</div>
        </>
    )
}

export default Courses