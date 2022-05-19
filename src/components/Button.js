import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--secondary'];
const SIZES = ['btn--medium', 'btn--large'];
const ROUTES = ['/', '/resume', '/projects', '/contact', '/updates'];


export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    path
}) => {
    // if style not specified, go with default style
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkPath = ROUTES.includes(path) ? path : ROUTES[0];
    return(
        //whatever is inside button populate it
        <Link to={`${checkPath}`} className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};