import { jsx as _jsx } from "react/jsx-runtime";
import './ButtNext.css';
const Button_next = ({ link }) => {
    return (_jsx("div", { className: "button-container", children: _jsx("a", { href: link, className: "continue-button-a", children: _jsx("button", { className: "continue-button", children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043C?" }) }) }));
};
export default Button_next;
