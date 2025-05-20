import { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventBase } from './eventBase';
import SearchBar from '../article/SearchBar';
import './events.css';

type EventTypeFilter = 'conference' | 'webinar' | 'workshop' | 'all';

const EventsPage = () => {
    const [selectedType, setSelectedType] = useState<EventTypeFilter>('all');
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
        .filter(event => 
            event.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter(event => 
            selectedType === 'all' ? true : event.type === selectedType
        );

    return (
        <div className="events-container">
            <h1 className="events-main-title">Каталог Мероприятий</h1>
            
            <div className="search-filters-wrapper">
                <SearchBar 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    txt="Введите название мероприятия:"
                />
                
                <div className="events-filters">
                    {['all', 'conference', 'webinar', 'workshop'].map((type) => (
                        <button
                            key={type}
                            className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                            onClick={() => setSelectedType(type as EventTypeFilter)}
                        >
                            {type === 'all' && 'Все'}
                            {type === 'conference' && 'Конференции'}
                            {type === 'webinar' && 'Вебинары'}
                            {type === 'workshop' && 'Воркшопы'}
                        </button>
                    ))}
                </div>
            </div>

            {filteredEvents.length === 0 ? (
                <div className="no-results">No articles found matching your search.</div>
            ) : (
                <div className="events-grid">
                    {filteredEvents.map(event => (
                        <div key={event.id} className="event-card">
                            <div className="event-image-container">
                                <img 
                                    src={event.image} 
                                    alt={event.title}
                                    className="event-image"
                                />
                                <span className={`event-type ${event.type}`}>
                                    {event.type === 'conference' && 'Конференция'}
                                    {event.type === 'webinar' && 'Вебинар'}
                                    {event.type === 'workshop' && 'Воркшоп'}
                                </span>
                            </div>
                            
                            <div className="event-content">
                                <h3 className="event-title">{event.title}</h3>
                                
                                <div className="event-meta">
                                    <p className="event-date">
                                        <span className="icon">📅</span>
                                        {event.date}
                                    </p>
                                    <p className="event-location">
                                        <span className="icon">📍</span>
                                        {event.location}
                                    </p>
                                </div>

                                <p className="event-description">{event.description}</p>
                                
                            
                                    <button className="event-register-btn"> <Link to={`/events/${event.id}`}>
                                        Подробнее
                                        <span className="arrow">→</span> </Link>
                                    </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventsPage;