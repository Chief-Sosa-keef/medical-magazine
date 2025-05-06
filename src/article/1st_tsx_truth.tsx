import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MedicalArticlePage from './1st_article';
import '../index.css';
import Head from "../main/header/head";
import Footer from "../footer/footer";
import BannerCont from '../main/banner/banner-cont';
const headerLinks = [

    { url: "index.html", text: "Главная" },
    { url: "catalog.html", text: "Сводка" },
    { url: "#", text: "Ссылка 3" },
    { url: "#", text: "Ссылка 4" }
    ];

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Head title='medical park' links={headerLinks}/>    
        <BannerCont />
        <MedicalArticlePage />
        <Footer />
    </StrictMode>
);