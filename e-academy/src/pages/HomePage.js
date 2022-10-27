import React from 'react'
import Footer from '../components/common/Footer'
import Menubar from '../components/common/Menubar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Subscripe from '../components/Subscripe'

const HomePage = () => {
    return (
        <>
            <Menubar />
            <Hero />
            <Services/>
            <Subscripe/>
            <Footer />
        </>
    )
}

export default HomePage