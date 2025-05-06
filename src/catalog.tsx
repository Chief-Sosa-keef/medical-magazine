import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Head from './main/header/head.tsx'
import Banner_cont from './main/banner/banner-cont.tsx'
import Direction from './catolog/direction.tsx'
import Footer from './footer/footer.tsx'
import './main/scrollbar.css'

const headerLinks = [
    { url: "index.html", text: "Главная" },
    { url: "catalog.html", text: "Сводка" },
    { url: "events.html", text: "Мероприятия" },
    { url: "#", text: "Ссылка 4" }
];

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <Head title='medical park' links={headerLinks} />
    <Banner_cont />
    <Direction />
    <Footer />
    
</StrictMode>

)
