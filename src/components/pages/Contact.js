import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import ContactForm from '../ContactForm';
import ContactVidSection from '../ContactVidSection';

function Contact() {
    return (
        <div>
            <ContactVidSection/>
            
            <div className='lower-container'>
                <div className='form-map-wrapper'>
                    <ContactForm/>
                </div>
                <div className='form-map-wrapper'>
                    
                </div>
                <br/>
            </div>
       
            <Footer/>
        </div>
    );
}

export default Contact;