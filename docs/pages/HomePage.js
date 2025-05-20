import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import Head from '../main/header/head'
import Banner_cont from '../main/banner/banner-cont';
import Info_block from '../main/info_block/info_block';
import Slider from '../main/slider/slider';
import ScientificJournalAbout from '../main/last_info_block/lastInfo.block';
// import Footer from '../footer/footer'
import NWCDeveloperCard from '../main/NWC/NWCDeveloperCard';
// const headerLinks = [
//   { url: "/", text: "Главная" },          // было "index.html"
//   { url: "/catalog", text: "Сводка" },    // было "catalog.html"
//   { url: "/events", text: "Мероприятия" }, // было "events.html"
//   { url: "/contacts", text: "Контакты" }   // было "#"
// ];
export default function HomePage() {
    return (_jsxs(_Fragment, { children: [_jsx(Banner_cont, {}), _jsx(Info_block, {}), _jsx(Slider, {}), _jsx(NWCDeveloperCard, {}), _jsx(ScientificJournalAbout, {})] }));
}
