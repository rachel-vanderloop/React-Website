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
                        <h2>Footer Links</h2>
                        <Link to='/contact'>Link1</Link>
                        <Link to='/projects'>Link2</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Footer Links</h2>
                        <Link to='/contact'>Link1</Link>
                        <Link to='/projects'>Link2</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Footer Links</h2>
                        <Link to='/contact'>Link1</Link>
                        <Link to='/projects'>Link2</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            rachel with logo
                        </Link>
                    </div>
                    <small className='website-rights'>pls don't steal my stuff</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'>
                                <i className='fab fa-facebook-f'/>
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
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;