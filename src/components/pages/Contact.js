import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import ContactForm from '../ContactForm';

function Contact() {
    return (
        <div>
            <h1>Get in Touch!</h1>
            <div className='contact-blurb'>
                <h1>About Rachel</h1> 
                <h2>pronouns: they/them</h2>
            </div>

            <div className='upper-container'>
                <div className='platform-container'>
                    <div className='platform-clmn'>
                        <i className='fab fa-github'/> <br/>
                        <i className='fab fa-linkedin'/>
                    </div>
                    <div className='platform-clm'>  
                        <p className='handle'>git</p>
                        <p className='handle'>linkedin</p>
                    </div>
                    <div className='platform-clmn'>
                        <i className='fab fa-facebook'/> <br/>
                        <i className='fab fa-instagram'/>
                    </div>
                    <div className='platform-clm'>
                        <p className='handle'>facebook.com/rachel.vanderloop/</p>
                        <p className='handle'>@raynotrachel332</p>
                    </div> 
                    <div className='platform-clmn'>
                        <i className='fas fa-envelope'/> <br/>
                        <i className='fas fa-envelope'/>
                    </div>  
                    <div className='platform-clm'>
                        <p className='handle'>rachelvanderloop@gmail.com</p>
                        <p className='handle'>rvanderl@uwo.ca</p>
                    </div>                  
                </div>
            </div>
  
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Contact;