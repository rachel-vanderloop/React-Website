import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import ContactForm from '../ContactForm';
import ContactVidSection from '../ContactVidSection';

function Contact() {
    return (
        <div>
            <ContactVidSection/>
            <div className='upper-container'>
                <div className='platform-container'>
                    
                    <div className='platform-clmn'>
                        <i className='fab fa-facebook'/> <p className='handle'>facebook.com/rachel.vanderloop/</p>
                        <i className='fab fa-instagram'/> <p className='handle'>@raynotrachel332</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fab fa-github'/> <p className='handle'>rachel-vanderloop</p>
                        <i className='fab fa-linkedin'/> <p className='handle'>rachelvanderloop</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fas fa-envelope'/> <p className='handle'>rachelvanderloop@gmail.com</p>
                        <i className='fas fa-envelope'/> <p className='handle'>rvanderl@uwo.ca</p>
                    </div>                    
                </div>
            </div>

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