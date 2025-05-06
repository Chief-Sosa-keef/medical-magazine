import React from 'react';
import './ButtNext.css'

interface ButtonNextProps {
    link: string; 
}

const Button_next: React.FC<ButtonNextProps> = ({ link }) => {
    return (
        <div className="button-container">
            <a href={link} className="continue-button-a">
                <button className="continue-button">Продолжим?</button>
            </a>
        </div>
    );
};

export default Button_next;