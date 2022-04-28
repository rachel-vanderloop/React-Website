import React from 'react';
import '../App.css';
import './ContactVidSection.css';

function ContactVidSection() {
    return (
        <div className='banner-container'>
            <video src='/videos/waves-sample-vid.mp4' autoPlay loop muted/>
            
            <div className='upper-container'>
                <div className='contact-blurb'>
                    <h1>Get in Touch!</h1>
                    <h1>pronouns: they/them</h1>
                </div>
                <div className='platform-container'>
                    
                    <div className='platform-clmn'>
                        <i className='fab fa-github'/> <p className='handle'>ray-vanderloop</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fab fa-linkedin'/> <p className='handle'>rachelvanderloop</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fas fa-envelope'/> <p className='handle'>rachelvanderloop@gmail.com</p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default ContactVidSection
