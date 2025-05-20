import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import MedicalArticlePage from '../article/1st_article';
import '../index.css';
import BannerCont from '../main/banner/banner-cont';
// import Footer from '../footer/footer'
// const headerLinks = [
//     { url: "/", text: "Главная" },          // было "index.html"
//     { url: "/catalog", text: "Сводка" },    // было "catalog.html"
//     { url: "/events", text: "Мероприятия" }, // было "events.html"
//     { url: "/contacts", text: "Контакты" }   // было "#"
// ];
export default function Article() {
    return (_jsxs(_Fragment, { children: [_jsx(BannerCont, {}), _jsx(MedicalArticlePage, {})] }));
}
