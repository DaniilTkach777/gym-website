import React from "react";
import Header from "../Header/Header";
import './Hero.css'
const Hero = () => {
    return (
    <div className="hero">
       <div className="left-h">
        <Header/>
{/* the best ad */}
        <div className="the-best-ad">
        <div></div>
        <span>The best Gym in the town!</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
            <div>
                <span className="stroke-text">Shape</span>
                <span> Your</span>
                
            </div>
            <div>
                <span>Ideal body!</span>
            </div>
            <div>
              <span>
            In here we will help you to shape and build your ideal body and live up your life to fullest
              </span>
            </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>+157</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+957</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+75</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}

        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>

        </div>
       <div className="right-h"></div>
    </div>
    )
}

export default Hero