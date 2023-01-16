import React from 'react';
import '../App.css';
import './ContactVidSection.css';

function ContactVidSection() {
    return (
        <div className='banner-container'>
            <video src='/videos/waves-sample-vid.mp4' autoPlay loop muted />

            <div className='upper-container'>
                <div className='contact-blurb'>
                    <h1>Get in touch with me!</h1>
                    <br />
                    <h2>pronouns: they/them</h2>
                </div>
                <div className='platform-container'>
                    <div className='platform-clmn'>
                        <a href="https://github.com/ray-vanderloop" target="_blank">
                            <i className='fab fa-github' />
                            <p className='handle'>ray-vanderloop</p>
                        </a>
                    </div>
                    <div className='platform-clmn'>
                        <a href="https://www.linkedin.com/in/rachelvanderloop/" target="_blank">
                            <i className='fab fa-linkedin' />
                            <p className='handle'>rachelvanderloop</p>
                        </a>
                    </div>
                </div>
                <div className='platform-container'>
                    <div className='platform-clmn'>
                        <a href="mailto:r.vanderloop@icloud.com">
                            <i className='fas fa-envelope' />
                            <p className='handle'>r.vanderloop@icloud.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactVidSection
