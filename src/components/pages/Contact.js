import React from 'react';
import '../../App.css';
import './Contact.css';
import ContactForm from '../ContactForm';
import ContactVidSection from '../ContactVidSection';

function Contact() {
    return (
        <div>
            
            <div className='wrapper'>
                <ContactVidSection className='contactvid'/>
                <img src='/images/western-pride.jpg'/>
            </div>
        
        </div>
    );
}

export default Contact;