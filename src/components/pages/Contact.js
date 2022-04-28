import React from 'react';
import '../../App.css';
import './Contact.css';
import ContactForm from '../ContactForm';
import ContactVidSection from '../ContactVidSection';

function Contact() {
    return (
        <div>
            <ContactVidSection className='contactvid'/>
            <div className='wrapper'>
                <div className='contactform'>
                    <ContactForm className='contactform'/>
                </div>
                <img src='/images/western-pride.jpg'/>
            </div>
            
            
       
        </div>
    );
}

export default Contact;