import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <>
        <h1>About</h1>
        <Link to={'/about/saya'}>Saya</Link>
        <Outlet/>
        </>
    )
}

export default About
