import React from 'react';
import CardItem from './CardItem';
import { Button } from './Button';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects and Portfolio - the list is always growing</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/rainbow-cloud.jpg'
                        text='Western International highlights'
                        label='Projects'
                        path='/western_int'
                        />
                        <CardItem 
                        src='images/world-img.jpg'
                        text='International &amp; Exchange Student Centre highlights'
                        label='Projects'
                        path='/iesc'
                        />
                        <CardItem 
                        src='images/meandkitty.jpg'
                        text='Western Heads East highlights'
                        label='Projects'
                        path='/projects'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/world-img.jpg'
                        text='Link to cool blog post I like'
                        label='Personal'
                        path='/projects'
                        />
                        <CardItem 
                        src='images/meandkitty.jpg'
                        text='Kitty loves to help me with school'
                        label='Personal'
                        path='/projects'
                        />
                        <CardItem 
                        src='images/graduation.jpg'
                        text='Graduation and Iron Ring Cermony'
                        label='Life Events'
                        path='/projects'
                        />
                    </ul>
                </div>
                
            </div>
            <h3>Want to add your project to the list? Get in touch!</h3> <br/>
            <Button 
                    className='btns' 
                    path='/contact'
                    buttonStyle='btn--secondary'
                    buttonSize='btn--large'>
                    <i class="far fa-hand-point-right"></i> CLICK ME <i class="far fa-hand-point-left"></i>
            </Button>
        </div>
    )
}

export default Cards
