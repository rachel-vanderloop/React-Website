import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Page Links</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/resume'>Resume</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Links to Explore</h2>
                        <Link to={{pathname: "https://randomsong.net"}} target="_blank">randomsong.net</Link>
                        <Link to={{pathname: "https://www.mapcrunch.com"}} target="_blank">Random Street View</Link>
                        <Link to={{pathname: "https://quickdraw.withgoogle.com"}} target="_blank">Quick, Draw!</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Recent Updates</h2>
                        <Link to='/projects'>Link1</Link>
                        <Link to='/projects'>Link2</Link>
                        <Link to='/projects'>Link3</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Info</h2>
                        <p>Rachel Vanderloop</p>
                        <p>rachelvanderloop@gmail.com</p>
                        <p>rvanderl@uwo.ca</p>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img to='/' className='logo-img' src='images/logo-white.png'/>
                        </Link>
                    </div>
                    <small className='website-rights'>Rachel Vanderloop, 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                                <i className='fab fa-facebook'/>
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                                <i className='fab fa-instagram'/>
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-linkedin'/>
                        </Link>
                        <Link className='social-icon-link github'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'>
                                <i className='fab fa-github'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;