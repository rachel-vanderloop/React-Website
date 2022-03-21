import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import ContactForm from '../ContactForm';
import ContactVidSection from '../ContactVidSection';

function Contact() {
    return (
        <div>
            <ContactVidSection className='contactvid'/>
            
            <div className='lower-container'>
                <div className='form-map-wrapper'>
                    <ContactForm/>
                </div>
                <div className='form-map-wrapper'>
                    
                </div>
                <br/>
            </div>
       
        </div>
    );
}

export default Contact;