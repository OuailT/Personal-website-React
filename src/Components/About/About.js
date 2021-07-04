import React from 'react'
import "./About.css"


const About = () => {
    return (
        <section className="About">
            <div className="row">
                <div className="col50">
                <h1>AboutME</h1>
                <p>Bonjour! 
                je m'appelle Ouail Tayarth, passionné par le code et le design.
                Je suis un développeur front-end (React) basé à Paris. </p>
                </div>

                <div className="col50">
                <div className="box-img">
                    <img src="Picture/aboutme.jpg"/>
                </div>
                </div> 
            </div>
        </section>
    )
}

export default About
