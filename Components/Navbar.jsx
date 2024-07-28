// import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <Link to="/">
              <h1>Musical</h1>
            </Link>
            <Link to="/songs">
                <button>PLAYLIST</button>
            </Link>
        </nav>
    )
}

export default Navbar