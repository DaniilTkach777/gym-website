import React from "react";
import Header from "../Header/Header";
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
const Hero = () => {

  const trasition = {type:'spring', duration: 3}
    return (
    <div className="hero">

      <div className="blur hero-blur"></div>
       <div className="left-h">
        <Header/>
{/* the best ad */}
        <div className="the-best-ad">
        <motion.div
        initial={{left:'238px'}}
        whileInView={{left: '8px'}}
        transition={ {...trasition, type: 'tween'} }
        
      >

        </motion.div>
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
       <div className="right-h">
        <button className="btn">Join Now</button>
        
        <motion.div
        initial={{ right: "-1rem"}}
        whileInView={{ right: "4rem"}}
        transition={trasition}
        className="heart-rate">
        
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>117 bpm</span>
        
        </motion.div>

        {/* hero images */}

        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img
        
        initial={{right: '11rem'}}
        whileInView={{ right: "20rem"}}
        transition={trasition}
        
        src={hero_image_back} alt="" className="hero-image-back"/>
        {/* calories */}
        <motion.div
        initial={{ right: "37rem"}}
        whileInView={{ right: "28rem"}}
        transition={trasition}
        className="calories">
        
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>230 kcal</span>
          </div>
        </motion.div>

       </div>
    </div>
    )
}

export default Hero