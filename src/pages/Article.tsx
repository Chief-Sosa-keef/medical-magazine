
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
return (
    <>
        {/* <Head title='..' links={headerLinks}/> */}
        <BannerCont />
        <MedicalArticlePage />
        {/* <Footer /> */}
    </>
    )
}

