    // src/pages/NotFoundPage.tsx
    import { Link } from 'react-router-dom';
    import { useEffect, useRef, useState } from 'react';
    import './NotFoundPage.css';

    export default function NotFoundPage() {
    const [isAnalyzing, setIsAnalyzing] = useState(true);
    const dnaRef = useRef<HTMLDivElement>(null);
    const scanRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Анимация загрузки
        const timer = setTimeout(() => {
        setIsAnalyzing(false);
        }, 3000);

        // Анимация ДНК
        if (dnaRef.current) {
        const dna = dnaRef.current;
        for (let i = 0; i < 20; i++) {
            const basePair = document.createElement('div');
            basePair.className = 'base-pair';
            basePair.style.setProperty('--delay', `${i * 0.1}s`);
            dna.appendChild(basePair);
        }
        }

        // Анимация сканирования
        if (scanRef.current) {
        const scan = () => {
            scanRef.current!.style.top = '0';
            setTimeout(() => {
            scanRef.current!.style.top = '100%';
            }, 1000);
        };
        scan();
        const scanInterval = setInterval(scan, 2000);
        return () => clearInterval(scanInterval);
        }

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="med-404-container">
        <div className={`diagnostic-loader ${isAnalyzing ? 'active' : ''}`}>
            <div className="dna-strand" ref={dnaRef}></div>
            <div className="scan-line" ref={scanRef}></div>
            <div className="loader-text">Анализ проблемы...</div>
        </div>

        {!isAnalyzing && (
            <div className="diagnostic-result animate-fade-in">
            <div className="error-header">
                <Link to="/" >
                <div className="medical-cross">
                <div className="cross-line"></div>
                <div className="cross-line"></div>
                </div></Link>
                <h1>Ошибка <span className="error-code">404</span></h1>
            </div>

            <div className="animation-container">
                <div className="microscope-slide">
                <div className="bacteria"></div>
                <div className="bacteria"></div>
                <div className="bacteria"></div>
                </div>
                <div className="x-ray-image"></div>
            </div>

            <div className="diagnosis">
                <h2>Диагноз: <span className="diagnosis-name">"Страница не найдена"</span></h2>
                <div className="diagnosis-details">
                <p>
                    <strong>Клиническая картина:</strong> Запрошенный URL не соответствует ни одному известному ресурсу.
                </p>
                <p>
                    <strong>Патогенез:</strong> Возможно, страница была удалена, перемещена или никогда не существовала.
                </p>
                </div>
            </div>

            <div className="treatment-plan">
                <h3>Рекомендуемое лечение:</h3>
                <ol className="treatment-steps">
                <li>Проверить правильность введенного адреса</li>
                <li>Вернуться на предыдущую страницу</li>
                <li>Перейти на главную страницу клиники</li>
                </ol>
            </div>

            <div className="medical-buttons">
                <Link to="/" className="pill-button primary">
                <span>Главное меню</span>
                <div className="pill-shape"></div>
                </Link>
                <button className="pill-button secondary" onClick={() => window.location.reload()}>
                <span>Повторить попытку</span>
                <div className="pill-shape"></div>
                </button>
            </div>

            <div className="medical-footer">
                <p>Если проблема сохраняется, обратитесь в ИТ-отдел</p>
                <div className="emergency-contact">
                <span>Экстренный вызов:</span>
                <a href="mailto:support@medclinic.com">support@medclinic.com</a>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }