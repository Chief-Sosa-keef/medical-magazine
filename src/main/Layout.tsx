import Head from './header/head'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
const headerLinks = [
  { url: "/", text: "Главная" },          // было "index.html"
  { url: "/catalog", text: "Сводка" },    // было "catalog.html"
  { url: "/events", text: "Мероприятия" }, // было "events.html"
];
export default function Layout() {
  return (
    <>
      <Head  links={headerLinks}/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}