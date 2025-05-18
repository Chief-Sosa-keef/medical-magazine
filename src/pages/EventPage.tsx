import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EventTemplate from '../concert/EventsShablon';
import BannerCont from '../main/banner/banner-cont';
import { eventBase, Events } from '../concert/eventBase';
import '../main/scrollbar.css';


const EventPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<Events | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvent = () => {
            try {
                const foundEvent = eventBase.find(e => e.id === id);
                
                if (!foundEvent) {
                    throw new Error('Мероприятие не найдено');
                }

                setEvent(foundEvent);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Произошла ошибка');
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    const renderContent = () => {
        if (loading) {
            return (
                <div className="loader-container">
                    <div className="loader"></div>
                    <p>Загрузка мероприятия...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="error-container">
                    <h2>Ошибка!</h2>
                    <p>{error}</p>
                    <button 
                        className="retry-button"
                        onClick={() => window.location.reload()}
                    >
                        Попробовать снова
                    </button>
                </div>
            );
        }

        if (!event) return null;

        return (
            <>
                <BannerCont />
                <EventTemplate {...event} />
            </>
        );
    };

    return <div className="event-page-container">{renderContent()}</div>;
};

export default EventPage;