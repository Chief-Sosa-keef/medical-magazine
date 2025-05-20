import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventBase } from './eventBase';
import SearchBar from '../article/SearchBar';
import './events.css';
const EventsPage = () => {
    const [selectedType, setSelectedType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const transformedEvents = eventBase.map(event => ({
        id: event.id,
        title: event.eventTitle,
        date: event.date,
        location: event.location,
        description: event.content.sections[0]?.text || '',
        type: event.type,
        image: event.content.sections[0]?.image || 'https://via.placeholder.com/400x200'
    }));
    const filteredEvents = transformedEvents
        .filter(event => event.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(event => selectedType === 'all' ? true : event.type === selectedType);
    return (_jsxs("div", { className: "events-container", children: [_jsx("h1", { className: "events-main-title", children: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439" }), _jsxs("div", { className: "search-filters-wrapper", children: [_jsx(SearchBar, { searchQuery: searchQuery, setSearchQuery: setSearchQuery, txt: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F:" }), _jsx("div", { className: "events-filters", children: ['all', 'conference', 'webinar', 'workshop'].map((type) => (_jsxs("button", { className: `filter-btn ${selectedType === type ? 'active' : ''}`, onClick: () => setSelectedType(type), children: [type === 'all' && 'Все', type === 'conference' && 'Конференции', type === 'webinar' && 'Вебинары', type === 'workshop' && 'Воркшопы'] }, type))) })] }), filteredEvents.length === 0 ? (_jsx("div", { className: "no-results", children: "No articles found matching your search." })) : (_jsx("div", { className: "events-grid", children: filteredEvents.map(event => (_jsxs("div", { className: "event-card", children: [_jsxs("div", { className: "event-image-container", children: [_jsx("img", { src: event.image, alt: event.title, className: "event-image" }), _jsxs("span", { className: `event-type ${event.type}`, children: [event.type === 'conference' && 'Конференция', event.type === 'webinar' && 'Вебинар', event.type === 'workshop' && 'Воркшоп'] })] }), _jsxs("div", { className: "event-content", children: [_jsx("h3", { className: "event-title", children: event.title }), _jsxs("div", { className: "event-meta", children: [_jsxs("p", { className: "event-date", children: [_jsx("span", { className: "icon", children: "\uD83D\uDCC5" }), event.date] }), _jsxs("p", { className: "event-location", children: [_jsx("span", { className: "icon", children: "\uD83D\uDCCD" }), event.location] })] }), _jsx("p", { className: "event-description", children: event.description }), _jsx(Link, { to: `/events/${event.id}`, children: _jsxs("button", { className: "event-register-btn", children: ["\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435", _jsx("span", { className: "arrow", children: "\u2192" })] }) })] })] }, event.id))) }))] }));
};
export default EventsPage;
