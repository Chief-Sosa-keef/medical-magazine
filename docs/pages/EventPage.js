import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EventTemplate from '../concert/EventsShablon';
import BannerCont from '../main/banner/banner-cont';
import { eventBase } from '../concert/eventBase';
import '../main/scrollbar.css';
const EventPage = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchEvent = () => {
            try {
                const foundEvent = eventBase.find(e => e.id === id);
                if (!foundEvent) {
                    throw new Error('Мероприятие не найдено');
                }
                setEvent(foundEvent);
                setError(null);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'Произошла ошибка');
            }
            finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [id]);
    const renderContent = () => {
        if (loading) {
            return (_jsxs("div", { className: "loader-container", children: [_jsx("div", { className: "loader" }), _jsx("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F..." })] }));
        }
        if (error) {
            return (_jsxs("div", { className: "error-container", children: [_jsx("h2", { children: "\u041E\u0448\u0438\u0431\u043A\u0430!" }), _jsx("p", { children: error }), _jsx("button", { className: "retry-button", onClick: () => window.location.reload(), children: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430" })] }));
        }
        if (!event)
            return null;
        return (_jsxs(_Fragment, { children: [_jsx(BannerCont, {}), _jsx(EventTemplate, { ...event })] }));
    };
    return _jsx("div", { className: "event-page-container", children: renderContent() });
};
export default EventPage;
