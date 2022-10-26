import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {

    const courseCheckout = useLoaderData()

    const { title } = courseCheckout
    return (
        <>
            <div>{title}</div>
        </>
    )
}

export default Checkout