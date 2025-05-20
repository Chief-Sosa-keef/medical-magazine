    // SoloDeveloperCard.tsx
    import './NWCDeveloperCard.css';

    const SoloDeveloperCard = () => {
    return (
        <div className="dev-card">
        <div className="dev-content">
            <div className="dev-header">
            <img 
                src="../docs/react.svg" 
                alt="Creator" 
                className="dev-avatar"
            />
            <h1 className="dev-title">NWC</h1>
            <p className="dev-subtitle">Создатель этого сайта</p>
            </div>

            <div className="dev-bio">
            <p>
                Этот проект был создан мной от идеи до реализации. 
                Создан одним человеком
            </p>
            </div>

            <div className="dev-stack">
            <h3>Использованные технологии на данном сайте:</h3>
            <div className="stack-items">
                <span className="stack-item">React</span>
                <span className="stack-item">TypeScript</span>
                <span className="stack-item">CSS3</span>
            </div>
            </div>

            <div className="dev-links">
            <a href="https://github.com/Chief-Sosa-keef" className="dev-link" id='git-link'>
                <img src="../docs/github.gif" alt="GitHub" />
                GitHub
            </a>
            <a href="https://t.me/NexaWebCreators" className="dev-link">
                <img src="../docs/tg.gif" alt="Telegram" />
                Telegram
            </a>
            <a href="https://wa.me/79665000506" className="dev-link" id='we-link'>
                <img src="../docs/whatsapp.png" alt="Email" />
                WhatsApp
            </a>
            </div>

            <footer className="dev-footer">
            <p>© {new Date().getFullYear()} Сделано вручную</p> 
        {/* <a href="https://wa.me/79665000506" className='link-span-contact'>
        <img src="../src/assets/whatsapp.png" alt="" />
            <span className='span-contact'>+7 (966)500-05-06 - WhatsApp 
            </span>
        </a>     */}
            </footer>
        </div>
        </div>
    );
    };

    export default SoloDeveloperCard;