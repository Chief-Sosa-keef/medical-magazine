import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import './slider.css';
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);
    const sliderRef = useRef(null);
    const slidesRef = useRef(null);
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
    const showSlide = (index) => {
        let newIndex = index;
        if (index < 0) {
            newIndex = totalSlides.current - 1;
        }
        else if (index >= totalSlides.current) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        if (slidesRef.current) {
            slidesRef.current.forEach((slide, i) => {
                slide.style.display = i === newIndex ? 'block' : 'none';
            });
        }
    };
    const changeSlide = (step) => {
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
    const handleSliderClick = (event) => {
        if (!sliderRef.current)
            return;
        const sliderWidth = sliderRef.current.offsetWidth;
        const clickX = event.clientX - sliderRef.current.getBoundingClientRect().left;
        if (clickX > sliderWidth / 2) {
            changeSlide(1);
        }
        else {
            changeSlide(-1);
        }
    };
    const handleContinueClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (!targetId)
            return;
        const targetElement = document.getElementById(targetId);
        if (!targetElement)
            return;
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "slider", id: "slider", ref: sliderRef, onMouseEnter: stopAutoSlide, onMouseLeave: startAutoSlide, onClick: handleSliderClick, children: [_jsxs("div", { className: "slides", children: [_jsxs("div", { className: "slide", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format", alt: "\u0421\u043B\u0430\u0439\u0434 1" }), _jsxs("div", { className: "text", children: ["\u041F\u0435\u0440\u0432\u0430\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043F\u0435\u0447\u0435\u043D\u0438 ", _jsx("br", {}), "\uD83E\uDE7A *\u041E\u0440\u0433\u0430\u043D \u043D\u0430\u043F\u0435\u0447\u0430\u0442\u0430\u043D \u043D\u0430 3D-\u043F\u0440\u0438\u043D\u0442\u0435\u0440\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0431\u0435\u0437 \u043E\u0442\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F.* \u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0430 \u0432 \u042F\u043F\u043E\u043D\u0438\u0438. \u0411\u0438\u043E\u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u044B\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u043F\u0435\u0447\u0435\u043D\u0438 \u0441\u043E\u0437\u0434\u0430\u043D \u0438\u0437 \u0441\u0442\u0432\u043E\u043B\u043E\u0432\u044B\u0445 \u043A\u043B\u0435\u0442\u043E\u043A \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430. \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u044C \u043D\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043B\u0430\u043D\u0442\u0430\u0446\u0438\u044E \u0432 10 \u0440\u0430\u0437. ", _jsx("br", {}), "\uD83D\uDCCC \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u2192"] })] }), _jsxs("div", { className: "slide", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format", alt: "\u0421\u043B\u0430\u0439\u0434 2" }), _jsxs("div", { className: "text", children: [_jsx("span", { className: 'textMainSlider', children: "\u0423\u0447\u0435\u043D\u044B\u0435 \u043D\u0430\u0448\u043B\u0438 \u0441\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C \u0441\u0442\u0430\u0440\u0435\u043D\u0438\u0435 \u043A\u043B\u0435\u0442\u043E\u043A " }), _jsx("br", {}), "\uD83D\uDD2C \u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u0438 \u043D\u0430 30% \u0432 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F\u0445 \u043D\u0430 \u043C\u044B\u0448\u0430\u0445. \u041C\u0435\u0442\u043E\u0434 \u043E\u0441\u043D\u043E\u0432\u0430\u043D \u043D\u0430 \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0442\u0435\u043B\u043E\u043C\u0435\u0440\u0430\u0437\u044B. \u041A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u044F \u043D\u0430 \u043B\u044E\u0434\u044F\u0445 \u043D\u0430\u0447\u043D\u0443\u0442\u0441\u044F \u0432 2025 \u0433\u043E\u0434\u0443. ", _jsx("br", {}), "\uD83D\uDCCC \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u2192"] })] }), _jsxs("div", { className: "slide", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=faces&auto=format", alt: "\u0421\u043B\u0430\u0439\u0434 3" }), _jsxs("div", { className: "text", children: [_jsx("span", { className: 'textMainSlider', children: "\u0418\u0418 \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0438\u043D\u0441\u0443\u043B\u044C\u0442 \u0437\u0430 48 \u0447\u0430\u0441\u043E\u0432 \u0434\u043E \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430" }), " ", _jsx("br", {}), "\uD83E\uDD16 \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0430 \u2014 94%, \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0432 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430\u0445 \u0441 2024 \u0433\u043E\u0434\u0430. \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u042D\u041A\u0413, \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438 \u0431\u0438\u043E\u0445\u0438\u043C\u0438\u044E \u043A\u0440\u043E\u0432\u0438. \u041F\u0435\u0440\u0432\u044B\u0435 \u0442\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0432 \u0421\u0428\u0410 \u0438 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u0438. ", _jsx("br", {}), "\uD83D\uDCCC \u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435 \u2192"] })] }), _jsxs("div", { className: "slide", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format", alt: "\u0421\u043B\u0430\u0439\u0434 4" }), _jsxs("div", { className: "text", children: [_jsx("span", { className: 'textMainSlider', children: "\u0412\u041E\u0417 \u043E\u0431\u044A\u044F\u0432\u0438\u043B\u0430 \u043E \u043D\u043E\u0432\u043E\u043C \u0448\u0442\u0430\u043C\u043C\u0435 \u0433\u0440\u0438\u043F\u043F\u0430 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u0437\u0430\u0440\u0430\u0437\u043D\u043E\u0441\u0442\u044C\u044E" }), " ", _jsx("br", {}), "\u26A0\uFE0F \u0412\u0438\u0440\u0443\u0441 \"NeoH1N1\" \u0443\u0436\u0435 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D \u0432 15 \u0441\u0442\u0440\u0430\u043D\u0430\u0445. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438: \u043C\u0430\u0441\u043A\u0438 \u0432 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435, \u0440\u0435\u0432\u0430\u043A\u0446\u0438\u043D\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u0433\u0440\u0443\u043F\u043F \u0440\u0438\u0441\u043A\u0430. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0438\u043C\u043F\u0442\u043E\u043C\u044B \u2014 \u0436\u0430\u0440, \u043A\u0430\u0448\u0435\u043B\u044C, \u043C\u044B\u0448\u0435\u0447\u043D\u0430\u044F \u0441\u043B\u0430\u0431\u043E\u0441\u0442\u044C. ", _jsx("br", {}), "\uD83D\uDCCC \u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u2192"] })] }), _jsxs("div", { className: "slide", children: [_jsx("img", { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format", alt: "\u0421\u043B\u0430\u0439\u0434 5" }), _jsxs("div", { className: "text", children: [_jsx("span", { className: 'textMainSlider', children: " \u0422\u0435\u043B\u0435\u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438: \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438 \u0432\u0440\u0430\u0447\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D" }), " ", _jsx("br", {}), "\uD83D\uDCF1 \u041F\u0438\u043B\u043E\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u0432 10 \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u0445. \u0422\u0435\u043F\u0435\u0440\u044C \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u044B \u0438\u0437 \u0441\u0435\u043B \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u044B \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0437 \u043E\u0447\u0435\u0440\u0435\u0434\u0435\u0439. ", _jsx("br", {}), "\uD83D\uDCCC \u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442? \u2192"] })] })] }), _jsx("button", { className: "prev", onClick: () => changeSlide(-1), children: "\u276E" }), _jsx("button", { className: "next", onClick: () => changeSlide(1), children: "\u276F" })] }) }));
};
export default Slider;
