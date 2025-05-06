import { useEffect } from 'react';
import './banner.css'

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

    return (
        
        <div className="banner-content">
            <h2 className="nwc-preview" id="nwc-preview">NWC produced:</h2>
            <h1 className="main-title" id="h1_tag">Медицинская группа университета МГОУ!</h1>
        </div>
    );
}
