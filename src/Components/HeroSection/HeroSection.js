import React from 'react'
import './HeroSection.css';
import {Link} from 'react-router-dom';

const HeroSection = () => {
    return (
        <>
        <div className="banner">
            <div className="content">
            <video src="Picture/bg.mp4" autoPlay loop muted/>
                <h1>Tayarth Ouail</h1>
                <p>Front-End web Developer
                 based in Paris</p>
                <Link>Download Cv</Link>
                <ul className="social__media">
                    <li> 
                    <Link to="/"><img src="Picture/twitter.png" alt="Twitter"/></Link>
                    </li>

                    <li>
                     <Link to="/"> <img src="Picture/twitter.png" alt="Twitter"/></Link>
                    </li>

                    <li> 
                    <Link to="/"> <img src="Picture/twitter.png" alt="Twitter"/></Link>
                    </li>
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default HeroSection
