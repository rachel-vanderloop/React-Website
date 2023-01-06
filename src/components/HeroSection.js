import React from 'react';
import { Button } from './Button.js';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/code-herobanner.mp4' autoPlay loop muted/>
            <h1>Ray Vanderloop</h1>
            <p>Software engineering graduate with a passion for design, development and accessibility</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    path='/resume'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    TECH STACK
                </Button>
                <Button 
                    className='btns' 
                    path='/updates'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    LIFE UPDATES <i className='fas fa-compass' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
