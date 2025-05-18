import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>; // Добавляем обработчик
}

const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <Link 
      to={to.replace('.html', '')}
      className={`nav-link ${className}`}
      onClick={onClick} // Пробрасываем обработчик в Link
    >
      {children}
    </Link>
  );
};

export default NavLink;