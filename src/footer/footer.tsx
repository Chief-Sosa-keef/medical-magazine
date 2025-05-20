import './footer.css'; // Создадим отдельный файл стилей
const Footer = () => {
return (
    <footer className="med-footer">
    <div className="footer-wave"></div>
    
    <div className="footer-container">
        {/* Левый блок - контакты */}
        <div className="footer-section">
        <div className="logo-container">
            <img src="/react.svg" alt="Логотип" className="dna-logo" />
            <span className="journal-name">MED<span>SCIENCE</span></span>
        </div>
        <p className="footer-motto">"Где наука встречает клиническую практику"</p>
        
        <div className="contact-item">
            <img src="/react.svg" alt="Адрес"   className='img_in_foot'/>
            <span>Санкт-Петербург, ул. Академика Павлова, 12</span>
        </div>
        <div className="contact-item">
            <img src="/react.svg" alt="Email"  className='img_in_foot' />
            <span>editor@medscience.ru</span>
        </div>
        <div className="contact-item">
            <img src="/react.svg" alt="Телефон"  className='img_in_foot' />
            <span>+7 (812) 333-55-77</span>
        </div>
        </div>
        {/* Центральный блок - быстрые ссылки */}
        <div className="footer-section">
            <h3>Университетский проект</h3>
            {/* <img src="src\assets\react.svg" alt="Университет" className="uni-logo" /> */}
            <p>🔍 Официальное научное издание Северного Государственного Медицинского Университета</p>

            <div className="highlight-box">
            <p>"Без науки медицина — это всего лишь шаманство"🆒</p>
            <p className="author">— Проф. Алихан Евлоев 🧑‍⚕️</p>
            </div>
        </div>

        {/* Правый блок - контакты */}
        <div className="footer-section">
        <h3>Контакты</h3>
        <div className="contact-item">
            <img src="/react.svg" alt="Адрес" className='img_in_foot'/>
            <span>г. Архангельск, пр. Ломоносова, 4</span>
        </div>
        <div className="contact-item">
            <img src="/react.svg" alt="Email"  className='img_in_foot'/>
            <span>unijournal@nsmu.ru</span>
        </div>
        
        <div className="evloev-quote">
            <h4>📌 О движении:</h4>
            <p>Доктор Евлоев А.Д. создал это сообщество для молодых ученых-медиков, где главные принципы — честность исследований и практическая ценность каждого открытия. ☪️🔍</p>
            </div>
        </div>
    </div>
    {/* Нижняя часть футера */}
    <div className="footer-bottom">
        <div className="copyright">
        © 2024 MEDSCIENCE Magazine. Все права защищены.
        </div>
        <div className="footer-links-bottom">
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/terms">Условия использования</a>
        <a href="/sitemap">Карта сайта</a>
        </div>
    </div>
    </footer>
);
};

export default Footer;