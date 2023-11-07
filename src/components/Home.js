import React from "react";
import Button from 'react-bootstrap/Button';

export function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }
  
  
export default function Home() {
  return (
    <div aria-label= "Home Page">
        <header>
            <div className="landing-headings">
            <h1>MOTION.</h1>
            <p>Keep Moving.
            </p>
            <Button aria-label="Scroll Down" className="scroll-button" variant="dark" onClick={handleScroll}>Scroll Down</Button>
            </div>
        </header>

        <section className="about-us">
            <div className="about-us__main">
                <div className="about-us__content">
                <h2>About Us</h2>
                <p>
                    <span>Motion.</span> is a safe environment for people to share and find the perfect workouts.
                    With Motion. users can upload workouts anonymous and other users can search for
                    the desired workouts based on the available categories.
                </p>
                <p><span> Keep moving. </span> with <span>MOTION.</span></p>
                </div>
            <img src="img/about.jpeg" alt="group of 4 people (2 guys 2 girls) exercising on the workout mat."></img>
            </div>
        </section>
    </div>
  )
}