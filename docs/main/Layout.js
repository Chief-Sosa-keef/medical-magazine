import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Head from './header/head';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';
const headerLinks = [
    { url: "/", text: "Главная" }, // было "index.html"
    { url: "/catalog", text: "Сводка" }, // было "catalog.html"
    { url: "/events", text: "Мероприятия" }, // было "events.html"
];
export default function Layout() {
    return (_jsxs(_Fragment, { children: [_jsx(Head, { links: headerLinks }), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
