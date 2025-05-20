import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import './banner.css';
export default function BannerCont() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const nwc = document.getElementById('nwc-preview');
            if (nwc) {
                nwc.classList.add("nwc_diss");
            }
            const mgou = document.getElementById('h1_tag');
            if (mgou) {
                mgou.classList.add("main_title_viss");
            }
        }, 1500);
        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, []); // Зависимость пустая, чтобы эффект выполнялся только один раз при монтировании
    return (_jsxs("div", { className: "banner-content", children: [_jsx("h2", { className: "nwc-preview", id: "nwc-preview", children: "NWC produced:" }), _jsx("h1", { className: "main-title", id: "h1_tag", children: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u041C\u0413\u041E\u0423!" })] }));
}
