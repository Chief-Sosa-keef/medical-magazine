import React from 'react';
import './EventsShablonCss.css';

interface EventSection {
    id: string;
    title: string;
    text: string;
    image?: string;
    list?: string[];
}

interface EventTemplateProps {
    eventTitle: string;
    organizer: string;
    date: string;
    location: string;
    tags: Array<{
        text: string;
        anchor: string;
    }>;
    content: {
        sections: EventSection[];
    };
}

const EventTemplate: React.FC<EventTemplateProps> = ({
    eventTitle,
    organizer,
    date,
    location,
    tags,
    content
}) => {
    return (
        <div className="event-article">
            {/* Мета-информация в отдельном блоке */}
            <div className="event-meta-container">
                <div className="event-meta">
                    <div className="meta-item">
                        <span className="meta-label">Организатор</span>
                        <span className="meta-value">{organizer}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Дата</span>
                        <span className="meta-value">{date}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Место</span>
                        <span className="meta-value">{location}</span>
                    </div>
                    <div className="meta-tags">
                        {tags.map(tag => (
                            <a 
                                key={tag.anchor}
                                href={`#${tag.anchor}`}
                                className="meta-tag"
                            >
                                <span className="tag-decor"></span>
                                {tag.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <main className="event-content">
                <h1 className="event-main-title">{eventTitle}</h1>
                
                {content.sections.map((section, index) => (
                    <section 
                        key={section.id} 
                        id={section.id}
                        className={`article-section ${index % 2 === 0 ? 'section-left' : 'section-right'}`}
                    >
                        <div className="section-inner">
                            <div className="section-header">
                                <span className="title-number">0{index + 1}</span>
                                <h2 className="section-title">{section.title}</h2>
                            </div>
                            
                            {section.image && (
                                <div className="image-container parallax">
                                    <div className="image-frame"></div>
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="section-image"
                                    />
                                </div>
                            )}
                            
                            <div className="section-content">
                                <p className="section-text">{section.text}</p>
                                {section.list && (
                                    <ul className="section-list">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="list-item">
                                                <img src="./assets/react.svg" alt="" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </main>

            <footer className="event-footer">
                <div className="footer-content">
                    <p className="footer-note"><span id='spin-emoji'><img src="../src/assets/react.svg" alt="Адрес" className='img_in'/></span> Не упустите шанс присоединиться к нам!</p>
                    <div className="footer-decor"></div>
                </div>
            </footer>
        </div>
    );
};

export default EventTemplate;