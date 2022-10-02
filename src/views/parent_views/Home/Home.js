import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../components/generalPartials/Home/Footer'
import Header from '../../../components/generalPartials/Home/Header'

function Home() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Home
