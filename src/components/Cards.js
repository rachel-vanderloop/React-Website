import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Here are some things I find interesting</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
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
                        label='Meow'
                        path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
