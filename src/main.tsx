import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Head from './main/header/head.tsx'
import Banner_cont from './main/banner/banner-cont.tsx'
import Info_block from './main/info_block/info_block.tsx'
import Button_next from './main/butt_next/butt_next.tsx'
import Slider from './main/slider/slider.tsx'
import './main/scrollbar.css'
import Footer from './footer/footer.tsx'
import ScientificJournalAbout from './main/last_info_block/lastInfo.block.tsx'
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
    <Info_block />
    <Button_next link='#slider'  />
    <Slider />
    <ScientificJournalAbout />
    <Footer />
  </StrictMode>

)
