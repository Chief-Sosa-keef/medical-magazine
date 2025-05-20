import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './main/Layout'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/catalog'
import Events from './pages/event'
import NotFoundPage from './pages/NotFoundPage'
import Article from './pages/Article'
import EventPage from './pages/EventPage'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/universitet_react">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="events" element={<Events />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="events/:id" element={<EventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)