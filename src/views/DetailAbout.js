import React from 'react'
import {useLoaderData } from 'react-router-dom'
function DetailAbout() {
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div>
            <h1>
            Detail About
            </h1>
            
            {loader.msg}
        </div>
    )
}

export default DetailAbout
