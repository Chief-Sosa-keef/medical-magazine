import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './main/Layout'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/catalog'
import Events from './pages/event'
import NotFoundPage from './pages/NotFoundPage'
import Article from './pages/Article'
import App from './pages/EventPage'
import EventPage from './pages/EventPage'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="events" element={<Events />} />
        {/* Добавляем новый маршрут для статей */}
        {/* <Route path="articles/:articleId" element={<ArticlePage />} /> */}
        <Route path='article/:id' element={<Article/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path='/eventsPage' element={<App />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Route>
    </Routes>
  </BrowserRouter>)