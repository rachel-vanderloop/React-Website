import React from 'react';
import { Button } from './Button.js';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/world-sample-vid.mp4' autoPlay loop muted/>
            <h1>Words that I will replace</h1>
            <p>More text</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
