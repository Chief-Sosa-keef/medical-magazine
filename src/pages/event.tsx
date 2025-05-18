// import Head from '../main/header/head'
import EventsPage from '../concert/EventsPage'
import BannerCont from '../main/banner/banner-cont'
// import Footer from '../footer/footer'
// const headerLinks = [
//     { url: "/", text: "Главная" },          // было "index.html"
//     { url: "/catalog", text: "Сводка" },    // было "catalog.html"
//     { url: "/events", text: "Мероприятия" }, // было "events.html"
//     { url: "/contacts", text: "Контакты" }   // было "#"
//   ];
export default function HomePage() {
    return (
        <>
        {/* <Head title='..' links={headerLinks}/> */}
        <BannerCont />
        <EventsPage />
        {/* <Footer /> */}
        </>
    )
}

