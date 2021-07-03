import React from 'react'
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';


const HeroSection = () => {
    return (
        <>
        <div className="banner">
            <div className="content">
            <video src="Picture/bg.mp4" autoPlay loop muted/>
                <h1>Tayarth Ouail</h1>
                <p>Front-End web Developer
                 based in Paris</p>

                <Button type="button"
                        checkSize="regular"
                        checkStyle="buttonV1"> Read More </Button>

                <ul className="social__media">
                    <li> 
                    <Link to="/"> <AiFillGithub className="icon"/> </Link>
                    </li>

                    <li> 
                    <Link to="/"> <AiFillTwitterCircle className="icon"/> </Link>
                    </li>

                    <li>
                     <Link to="/"><AiFillLinkedin className="icon"/></Link> 
                    </li>
                    
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default HeroSection
