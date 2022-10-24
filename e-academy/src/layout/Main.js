import React from 'react'
import { Outlet } from 'react-router-dom'
import Menubar from '../components/common/Menubar'

const Main = () => {
    return (
        <>
            <Menubar />
            <Outlet />
        </>
    )
}

export default Main