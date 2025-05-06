    import React, { useState, useEffect, useRef } from 'react';
    import './slider.css'
    const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef<number | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
    const totalSlides = useRef(0);

    useEffect(() => {
        if (sliderRef.current) {
        slidesRef.current = sliderRef.current.querySelectorAll('.slide');
        totalSlides.current = slidesRef.current.length;
        showSlide(currentIndex);
        startAutoSlide();
        }

        return () => {
        stopAutoSlide();
        };
    }, []);

    const showSlide = (index: number) => {
        let newIndex = index;
        if (index < 0) {
        newIndex = totalSlides.current - 1;
        } else if (index >= totalSlides.current) {
        newIndex = 0;
        }

        setCurrentIndex(newIndex);

        if (slidesRef.current) {
        slidesRef.current.forEach((slide, i) => {
            slide.style.display = i === newIndex ? 'block' : 'none';
        });
        }
    };

    const changeSlide = (step: number) => {
        showSlide(currentIndex + step);
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        slideInterval.current = window.setInterval(() => {
        changeSlide(1);
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (slideInterval.current) {
        window.clearInterval(slideInterval.current);
        slideInterval.current = null;
        }
    };


    const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return;

        const sliderWidth = sliderRef.current.offsetWidth;
        const clickX = event.clientX - sliderRef.current.getBoundingClientRect().left;

        if (clickX > sliderWidth / 2) {
        changeSlide(1);
        } else {
        changeSlide(-1);
        }
    };

    const handleContinueClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (!targetId) return;
    
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
    
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };
    
    
    return (
        <>
        <div 
            className="slider" 
            id="slider"
            ref={sliderRef}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
            onClick={handleSliderClick}
        >
            <div className="slides">
            <div className="slide">
                <img 
                src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format" 
                alt="Слайд 1" 
                />
                <div className="text">
                Первая успешная пересадка искусственной печени <br />


                🩺 *Орган напечатан на 3D-принтере и работает без отторжения.*
                Операция проведена в Японии. Биосовместимый материал печени создан из стволовых клеток пациента. Технология может сократить очередь на трансплантацию в 10 раз. <br />

                
                📌 Подробности →

                </div>
            </div>


            <div className="slide">
                <img 
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format" 
                alt="Слайд 2" 
                />
                <div className="text">
                <span className='textMainSlider'>Ученые нашли способ замедлить старение клеток </span><br />

                🔬 Новый препарат увеличивает продолжительность жизни на 30% в испытаниях на мышах.
                Метод основан на активации теломеразы. Клинические испытания на людях начнутся в 2025 году. <br />

                📌 Подробнее →
                </div>
            </div>



            <div className="slide">
                <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=faces&auto=format" 
                alt="Слайд 3" 
                />
                <div className="text">
                <span className='textMainSlider'>
                ИИ предсказывает инсульт за 48 часов до приступа</span> <br/>


                🤖 Точность алгоритма — 94%, внедрение в больницах с 2024 года.
                Система анализирует данные ЭКГ, давление и биохимию крови. Первые тесты прошли в США и 
                Германии. <br />

                📌 Читать далее →

                </div>
            </div>



            <div className="slide">
                <img 
                src="https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format" 
                alt="Слайд 4" 
                />
                <div className="text">

                <span className='textMainSlider'>ВОЗ объявила о новом штамме гриппа с высокой заразностью</span> <br />

                ⚠️ Вирус "NeoH1N1" уже обнаружен в 15 странах.
                Рекомендации: маски в транспорте, ревакцинация для групп риска. Основные симптомы — жар, кашель, мышечная слабость. <br />

                📌 Узнать больше →
                </div>
            </div>
            <div className="slide">
                <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format" 
                alt="Слайд 5" 
                />
                <div className="text">
                <span className='textMainSlider'> Телемедицина в России: консультации врачей через смартфон</span> <br />

                📱 Пилотный проект запущен в 10 регионах.
                Теперь пациенты из сел могут получать диагнозы онлайн без очередей. <br />

                📌 Как это работает? →
                </div>
            </div>
            </div>
            <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
            <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
        </div>
        </>
    );
    };

    export default Slider;