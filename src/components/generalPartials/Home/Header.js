import React from 'react'
import Logo from './contentHeader/Logo'
import Nav from './contentHeader/Nav'
import ToogleMenu from './contentHeader/ToogleMenu'

function Header() {
    return (
        <header className="bisa-js__header md:w-10/12 w-full mx-auto h-max py-4">
            <div className="bisa-js__header-main flex justify-between items-center ">
                <Logo/>
                <Nav/>
                <ToogleMenu/>
            </div>
            {/* {stateNavMobile === 'open' ? <NavMobile user={user}/> : <></>} */}
            
        </header>
    )
}

export default Header
