import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Header.tsx
import { useState, useEffect, useRef } from 'react';
import NavLink from './navLink';
import { Link } from 'react-router-dom';
import './header.css';
const Header = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const mobileButtonRef = useRef(null);
    const toggleMenu = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen &&
                mobileMenuRef.current &&
                mobileButtonRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                !mobileButtonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);
    return (_jsxs("header", { children: [_jsxs("div", { className: "logo", children: [_jsx("img", { src: "./react.svg", alt: "Logo", className: "head-logo" }), _jsx(Link, { to: "/", id: "Link-h1", children: _jsx("h4", { children: _jsxs("span", { className: "journal-name", id: "head-text-logo", children: ["MED", _jsx("span", { children: "SCIENCE" })] }) }) })] }), _jsx("nav", { className: "desktop-menu", children: links.map((link, index) => (_jsx(NavLink, { to: link.url, children: link.text }, index))) }), _jsxs("button", { ref: mobileButtonRef, className: `mobile-menu-button ${isOpen ? 'active' : ''}`, onClick: toggleMenu, "aria-label": "Toggle menu", children: [_jsx("span", { className: "burger-icon" }), _jsx("span", { className: "burger-icon" }), _jsx("span", { className: "burger-icon" })] }), _jsx("div", { ref: mobileMenuRef, className: `mobile-menu ${isOpen ? 'open' : ''}`, children: links.map((link, index) => (_jsx(NavLink, { to: link.url, className: "mobile-nav-link", onClick: toggleMenu, children: link.text }, index))) })] }));
};
export default Header;
