import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <Link className='nav-link' to={`/pagea`}>Page A</Link>
                <Link className='nav-link' to={`/pageb`}>Page B</Link>
            </div>
            <div className='nav-right'>
                <Link className='nav-link' to={`/`}>Home</Link>
            </div>
        </div>
    )
}

export default Navbar