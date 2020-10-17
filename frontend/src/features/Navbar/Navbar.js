import React from 'react'
import "./navbar.css"


const Navbar = () => {
    return (
        <nav className="navbar" style={{ display: "flex", flexDirection: "row", marginBottom: "0px" }}>
            <h1>Skills</h1>
            <h1>Projects</h1>
            <h1>About Me</h1>
        </nav>
    )
}

export default Navbar;
