import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <a className="logo">Wave Dev</a>
            <ul className="navigation">
                <li><Link To="/">HOME</Link></li>
                <li><Link To="/">ABOUT</Link></li>
                <li><Link To="/">PROJECTS</Link></li>
                <li><Link To="/">SERVICES</Link></li>
                <li><Link To="/">TESTIMONIALS</Link></li>
                <li><Link To="/">CONTACTS</Link></li>
            </ul>
        </header>
    )
}

export default Navbar
