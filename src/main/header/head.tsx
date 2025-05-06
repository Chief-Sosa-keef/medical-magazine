import React from 'react';
import NavLink from './navLink';
import './header.css'

interface HeadProps {
    title: string;
    links: Array<{
        url: string;
        text: string;
    }>;
    }

    const Head: React.FC<HeadProps> = ({  links }) => {
    return (
        <header>
        <h4><div className="logo-container">
            <img src="src\assets\react.svg" alt="Логотип" className="dna-logo" />
            <span className="journal-name">MED<span>SCIENCE</span></span>
        </div></h4>
        <nav className="navigation">
            {links.map((link, index) => (
            <NavLink key={index} href={link.url}>
                {link.text}
            </NavLink>
            ))}
        </nav>
        </header>
    );
    };

    export default Head;