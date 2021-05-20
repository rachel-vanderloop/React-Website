import React from 'react'

function ContactVidSection() {
    return (
        <div className='banner-container'>
            <video src='/videos/waves-sample-vid.mp4' autoPlay loop muted/>
            <h1>Get in Touch!</h1>
            <div className='contact-blurb'>
                <h1>About Rachel</h1> 
                <h1>pronouns: they/them</h1>
            </div>
        </div>
    )
}

export default ContactVidSection
