import React from 'react';
import { Button } from './Button';
import './ContactForm.css';

function ContactForm() {
    return (
        <div className='form-wrapper'>
            <form className='form-item'>
                <span>
                    <h1>Contact Rachel</h1>
                </span>
                <span>
                    <input type='text' className='form-field' placeholder='Your full name'/>
                    <input type='text' className='form-field' placeholder='Your preferred pronouns'/>
                    <input type='email' className='form-field' placeholder='Your email'/>
                </span> 
                <label>What is your query?</label>
                <select id='desired-query'>
                    <option value='webdev' name=''>Build me a website!</option>
                    <option value='query' name=''>I need some info</option>
                    <option value='chat' name=''>I'd like to chat</option>
                </select>
                <input type='text' className='form-field' placeholder='Your message'/>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' type='submit'>Send away!</Button>
            </form>
        </div>
    )
}

export default ContactForm;