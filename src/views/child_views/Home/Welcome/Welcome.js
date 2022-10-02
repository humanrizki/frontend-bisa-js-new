import React from 'react'
import About from '../../../../components/Home/About'
import Languages from '../../../../components/Home/Languages'
import MessageWelcome from '../../../../components/Home/MessageWelcome'

function Welcome() {
    return (
        <>
            <MessageWelcome/>
            <Languages/>
            <About/>
        </>
    )
}

export default Welcome
