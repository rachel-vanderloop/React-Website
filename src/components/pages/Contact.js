import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import ContactForm from '../ContactForm';

function Contact() {
    return (
        <div>
            <h1>Get in Touch!</h1>
            <div className='contact-wrapper'>
                <div className='contact-left-wrapper'>
                    <div className='contact-blurb'>
                        <h1>About Rachel</h1>
                        <p>pronouns: they/them</p>
                    </div>
                    <div className='contact-socials'>
                        <h2>LinkedIn</h2>
                        <h2>Instagram</h2>
                        <h2>Facebook</h2>
                    </div>
                </div>
                <div className='contact-form'>
                    <ContactForm/>
                </div>
            </div>  
            <Footer/>
        </div>
    )
}

export default Contact;