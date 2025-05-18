import React from 'react';
import './lastInfoBlock.css';
import { 
    FaBook, 
    FaUniversity, 
    FaFlask, 
    FaGlobe, 
    FaChartLine, 
    FaEnvelope, 
    FaPhone 
} from 'react-icons/fa';

type RubricItem = {
    title: string;
    desc: string;
    color: string;
};

type ContactItem = {
    icon: React.ReactNode;
    text: string;
};

const ScientificJournalAbout: React.FC = () => {
    const rubrics: RubricItem[] = [
        { 
            title: "Социально-гумонитарные науки", 
            desc: "Глубокий анализ и теоретические разработки", 
            color: "blue" 
        },
        { 
            title: "Естесвтенно-технологические науки", 
            desc: "Инновационные решения для реального сектора", 
            color: "green" 
        },
        { 
            title: "Медецинская наука", 
            desc: "Лечить людей - это не только наука,но и искусство", 
            color: "purple" 
        }
    ];

    const contacts: ContactItem[] = [
        { 
            icon: <FaUniversity className="contact-icon" />, 
            text: "199034, Санкт-Петербург, Университетская наб., 7-9" 
        },
        { 
            icon: <FaEnvelope className="contact-icon" />, 
            text: "journal@spbu.ru" 
        },
        { 
            icon: <FaPhone className="contact-icon" />, 
            text: "+7 (812) 123-45-67" 
        },
    ];

    return (
        <section className="journal-section">
            <div className="section-container">
                <div className="section-header">
                    <h1>О журнале <span>«Научный Вестник»</span></h1>
                    <div className="header-divider"></div>
                </div>

                <div className="content-grid">
                    <div className="main-content">
                        <div className="info-card highlight">
                            <p className="main-text">
                                <strong>«Научный Вестник»</strong> — ведущее научное издание <strong>Санкт-Петербургского Государственного Университета</strong>, 
                                объединяющее передовые исследования, инновационные разработки и академические дискуссии.
                            </p>
                            <p className="secondary-text">
                                Наш журнал служит площадкой для ученых, преподавателей и студентов, стремящихся делиться знаниями, 
                                вдохновлять на открытия и формировать будущее науки.
                            </p>
                        </div>

                        <div className="info-card info-mision">
                            <h3 className="card-title">
                                <FaFlask className="icon" /> Миссия журнала
                            </h3>
                            <p className="secondary-text">
                                Мы стремимся продвигать высококачественные научные публикации, соответствующие международным стандартам, 
                                и создавать мост между теорией и практикой.
                            </p>
                            <p className="secondary-text">
                                Наша цель — стать катализатором научного прогресса и поддерживать диалог между исследователями со всего мира.
                            </p>
                        </div>
                    </div>

                    <div className="sidebar-content">
                        <div className="university-card">
                            <h3 className="card-title">
                                <FaUniversity className="icon" /> Об университете
                            </h3>
                            <p className="main-text">
                                Журнал издается при поддержке <strong>Санкт-Петербургского Государственного Университета</strong> — 
                                одного из старейших и наиболее престижных учебных заведений России.
                            </p>
                            <p className="secondary-text">
                                Университет славится своей богатой историей, выдающимися выпускниками и вкладом в мировую науку.
                            </p>
                        </div>

                        <div className="benefits-card">
                            <h3 className="card-title">Почему стоит публиковаться у нас?</h3>
                            <ul className="benefits-list">
                                <li className="benefit-item">
                                    <FaChartLine className="benefit-icon" />
                                    <span><strong>Высокий импакт-фактор</strong> — индексация в Scopus, Web of Science, РИНЦ</span>
                                </li>
                                <li className="benefit-item">
                                    <FaGlobe className="benefit-icon" />
                                    <span><strong>Открытый доступ</strong> — все статьи бесплатны для научного сообщества</span>
                                </li>
                                <li className="benefit-item">
                                    <FaBook className="benefit-icon" />
                                    <span><strong>Профессиональное рецензирование</strong> — двойное слепое рецензирование</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="rubrics-section">
                    <h2>Основные рубрики</h2>
                    <div className="rubrics-grid">
                        {rubrics.map((item, index) => (
                            <div 
                                key={index} 
                                className={`rubric-card ${item.color}-bg`}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contacts-section">
                    <div className="contacts-info">
                        <h2>Контакты</h2>
                        <div className="contacts-list">
                            {contacts.map((contact, index) => (
                                <div key={index} className="contact-item">
                                    {contact.icon}
                                    <span>{contact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="cta-section">
                        <FaBook className="cta-icon" />
                        <p>Присоединяйтесь к нашему научному сообществу!</p>
                        <button onClick={() => console.log('Submit article clicked')}>
                            Отправить статью
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScientificJournalAbout;