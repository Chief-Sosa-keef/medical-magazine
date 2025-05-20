import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import Head from '../main/header/head'
import EventsPage from '../concert/EventsPage';
import BannerCont from '../main/banner/banner-cont';
// import Footer from '../footer/footer'
// const headerLinks = [
//     { url: "/", text: "Главная" },          // было "index.html"
//     { url: "/catalog", text: "Сводка" },    // было "catalog.html"
//     { url: "/events", text: "Мероприятия" }, // было "events.html"
//     { url: "/contacts", text: "Контакты" }   // было "#"
//   ];
export default function HomePage() {
    return (_jsxs(_Fragment, { children: [_jsx(BannerCont, {}), _jsx(EventsPage, {})] }));
}
