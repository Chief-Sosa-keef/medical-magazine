import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    }

    const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <a href={href} className={`nav-link`}>
        {children}
        </a>
    );
};

export default NavLink;