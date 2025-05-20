import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './NotFoundPage.css';
export default function NotFoundPage() {
    const [isAnalyzing, setIsAnalyzing] = useState(true);
    const dnaRef = useRef(null);
    const scanRef = useRef(null);
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
                scanRef.current.style.top = '0';
                setTimeout(() => {
                    scanRef.current.style.top = '100%';
                }, 1000);
            };
            scan();
            const scanInterval = setInterval(scan, 2000);
            return () => clearInterval(scanInterval);
        }
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs("div", { className: "med-404-container", children: [_jsxs("div", { className: `diagnostic-loader ${isAnalyzing ? 'active' : ''}`, children: [_jsx("div", { className: "dna-strand", ref: dnaRef }), _jsx("div", { className: "scan-line", ref: scanRef }), _jsx("div", { className: "loader-text", children: "\u0410\u043D\u0430\u043B\u0438\u0437 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B..." })] }), !isAnalyzing && (_jsxs("div", { className: "diagnostic-result animate-fade-in", children: [_jsxs("div", { className: "error-header", children: [_jsx(Link, { to: "/", children: _jsxs("div", { className: "medical-cross", children: [_jsx("div", { className: "cross-line" }), _jsx("div", { className: "cross-line" })] }) }), _jsxs("h1", { children: ["\u041E\u0448\u0438\u0431\u043A\u0430 ", _jsx("span", { className: "error-code", children: "404" })] })] }), _jsxs("div", { className: "animation-container", children: [_jsxs("div", { className: "microscope-slide", children: [_jsx("div", { className: "bacteria" }), _jsx("div", { className: "bacteria" }), _jsx("div", { className: "bacteria" })] }), _jsx("div", { className: "x-ray-image" })] }), _jsxs("div", { className: "diagnosis", children: [_jsxs("h2", { children: ["\u0414\u0438\u0430\u0433\u043D\u043E\u0437: ", _jsx("span", { className: "diagnosis-name", children: "\"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430\"" })] }), _jsxs("div", { className: "diagnosis-details", children: [_jsxs("p", { children: [_jsx("strong", { children: "\u041A\u043B\u0438\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430:" }), " \u0417\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439 URL \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u043C\u0443 \u0440\u0435\u0441\u0443\u0440\u0441\u0443."] }), _jsxs("p", { children: [_jsx("strong", { children: "\u041F\u0430\u0442\u043E\u0433\u0435\u043D\u0435\u0437:" }), " \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0430 \u0438\u043B\u0438 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0430."] })] })] }), _jsxs("div", { className: "treatment-plan", children: [_jsx("h3", { children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u043E\u0435 \u043B\u0435\u0447\u0435\u043D\u0438\u0435:" }), _jsxs("ol", { className: "treatment-steps", children: [_jsx("li", { children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430" }), _jsx("li", { children: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443" }), _jsx("li", { children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043A\u043B\u0438\u043D\u0438\u043A\u0438" })] })] }), _jsxs("div", { className: "medical-buttons", children: [_jsxs(Link, { to: "/", className: "pill-button primary", children: [_jsx("span", { children: "\u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E" }), _jsx("div", { className: "pill-shape" })] }), _jsxs("button", { className: "pill-button secondary", onClick: () => window.location.reload(), children: [_jsx("span", { children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u043E\u043F\u044B\u0442\u043A\u0443" }), _jsx("div", { className: "pill-shape" })] })] }), _jsxs("div", { className: "medical-footer", children: [_jsx("p", { children: "\u0415\u0441\u043B\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u0418\u0422-\u043E\u0442\u0434\u0435\u043B" }), _jsxs("div", { className: "emergency-contact", children: [_jsx("span", { children: "\u042D\u043A\u0441\u0442\u0440\u0435\u043D\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432:" }), _jsx("a", { href: "mailto:support@medclinic.com", children: "support@medclinic.com" })] })] })] }))] }));
}
