import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const NavLink = ({ to, children, className = '', onClick }) => {
    return (_jsx(Link, { to: to.replace('.html', ''), className: `nav-link ${className}`, onClick: onClick, children: children }));
};
export default NavLink;
