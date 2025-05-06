// src/pages/EventsPage.tsx
import { useState } from 'react';
import './events.css';

type EventType = 'conference' | 'webinar' | 'workshop' | 'all';

interface MedicalEvent {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    type: EventType;
    image: string;
    }

    const EventsPage = () => {
    const [selectedType, setSelectedType] = useState<EventType>('all');
    
    const events: MedicalEvent[] = [
        {
        id: 1,
        title: "Современные методы в кардиохирургии",
        date: "15 ноября 2023, 14:00",
        location: "Онлайн",
        description: "Новые подходы в лечении сердечно-сосудистых заболеваний",
        type: 'webinar',
        image: "https://media.gettyimages.com/id/1476904017/vector/particles-head.jpg?s=1024x1024&w=gi&k=20&c=UMu0ArelE7BZfhl6-TYC-ohbldfrl2GpljPysJHtmbM="
        },
        {
        id: 2,
        title: "Генетика в клинической практике",
        date: "20 ноября 2023, 10:00",
        location: "Москва, МГОУ",
        description: "Практическое применение генетических исследований",
        type: 'conference',
        image: "https://img.freepik.com/free-vector/abstract-dna-background_52683-8314.jpg?t=st=1746509300~exp=1746512900~hmac=a7f04fcaa6ed097f0ca3704bcbbe8795a19374abe8c041b3128622dca2c33159&w=996"
        },
        {
        id: 3,
        title: "Основы медицинской статистики",
        date: "25 ноября 2023, 16:00",
        location: "Санкт-Петербург, МедЦентр",
        description: "Практический воркшоп по анализу медицинских данных",
        type: 'workshop',
        image: "https://media.gettyimages.com/id/1674077782/photo/engineer-woman-and-robotics-laptop-and-programming-of-robot-arm-with-machine-learning-and.jpg?s=1024x1024&w=gi&k=20&c=4l-hiFfbR6yxxVMpnIQAnIFJ7k2JJ11CZrDgb7lIakY="
        },
    ];

    const filteredEvents = selectedType === 'all' 
        ? events 
        : events.filter(event => event.type === selectedType);

    return (
        <div className="events-container">
        <h1 className="events-main-title">Медицинские Мероприятия</h1>
        
        <div className="events-filters">
            {['all', 'conference', 'webinar', 'workshop'].map((type) => (
            <button
                key={type}
                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type as EventType)}
            >
                {type === 'all' && 'Все'}
                {type === 'conference' && 'Конференции'}
                {type === 'webinar' && 'Вебинары'}
                {type === 'workshop' && 'Воркшопы'}
            </button>
            ))}
        </div>

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
                
                <button className="event-register-btn">
                    Подробнее
                    <span className="arrow">→</span>
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

export default EventsPage;