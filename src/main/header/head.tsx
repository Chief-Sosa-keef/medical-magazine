// Header.tsx
import { useState, useEffect, useRef } from 'react';
import NavLink from './navLink';
import { Link } from 'react-router-dom';
import './header.css';

interface LinkItem {
  url: string;
  text: string;
}

interface HeaderProps {
  links: LinkItem[];
}

const Header = ({ links }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        mobileButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
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

  return (
    <header>
      <div className="logo">
        <img src="../react.svg" alt="Logo" className="head-logo" />
        <Link to="/" id="Link-h1">
          <h4>
            <span className="journal-name" id="head-text-logo">
              MED<span>SCIENCE</span>
            </span>
          </h4>
        </Link>
      </div>

      {/* Десктопное меню */}
      <nav className="desktop-menu">
        {links.map((link, index) => (
          <NavLink key={index} to={link.url}>
            {link.text}
          </NavLink>
        ))}
      </nav>

      {/* Мобильное меню */}
      <button
        ref={mobileButtonRef}
        className={`mobile-menu-button ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="burger-icon"></span>
        <span className="burger-icon"></span>
        <span className="burger-icon"></span>
      </button>

      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            className="mobile-nav-link"
            onClick={toggleMenu}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;