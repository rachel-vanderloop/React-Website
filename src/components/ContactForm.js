import React from 'react';
import { Button } from './Button';
import '../App.css';
import './ContactForm.css';


function ContactForm() {
    return (
        <div className='form-wrapper'>
            <form className='form-item'>
                <span>
                    <h1>Contact Ray</h1>
                </span>
                <span>
                    <label>Your name: </label>
                    <input type='text' className='form-field' placeholder='Your full name'/><br/>
                    <label>Your pronouns: </label>
                    <input type='text' className='form-field' placeholder='Your pronouns'/><br/>
                    <label>Your email: </label>
                    <input type='email' className='form-field' placeholder='Your email'/>
                </span> 
                <label>What is your query? </label>
                <select id='desired-query'>
                    <option value='webdev' name=''>Help me with a website!</option>
                    <option value='query' name=''>I need some information</option>
                    <option value='chat' name=''>I'd like to chat</option>
                </select> <br/>
                <input type='textarea' className='form-body' placeholder='Your message'/><br/>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' type='submit'>Send away!</Button>
            </form>
        </div>
    )
}

export default ContactForm;