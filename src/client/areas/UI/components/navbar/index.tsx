import React, { ReactElement } from 'react'

interface Navbar {}

function Navbar({}: Navbar): ReactElement {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"></ul>
        </nav>
    )
}

export default Navbar