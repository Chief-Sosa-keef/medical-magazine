import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import InfoBlockTxt from "./info_block_text"
// export default function Info_block() {
//     let textBlock = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi. Ad, fugit suscipit porro reiciendis, ducimus exercitationem eveniet sed nesciunt tempora animi nostrum. Maxime perspiciatis sint quam odio, ducimus labore!"
//     return (
//         <>
//     <div className="info_block_head">
//         <InfoBlockTxt text={textBlock} />
//         <InfoBlockTxt text={textBlock} />
//         <InfoBlockTxt text={textBlock} />
//         <InfoBlockTxt text={textBlock} />
//         <div className="info_head">
//     <img  id="img_in_info_block"
//         src="src\assets\medical.png" 
//         alt="" />
// </div>
//         <InfoBlockTxt text={textBlock} />
//         <InfoBlockTxt text={textBlock} />
//         <InfoBlockTxt text={textBlock} />
// </div>
//         </>
//     ) 
//     }
// import InfoBlockTxt from "./info_block_text";
//  // Вынесем стили в отдельный файл
// import './info_block.css'
// export default function Info_block() {
//     const textBlock = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nisi. Ad, fugit suscipit porro reiciendis, ducimus exercitationem eveniet sed nesciunt tempora animi nostrum. Maxime perspiciatis sint quam odio, ducimus labore!";
//     return (
//         <div className="info_block_container">
//             <div className="info_block_grid">
//                 {/* Верхняя строка - 3 блока */}
//                 <div className="info_block_row top-row">
//                     <InfoBlockTxt text={textBlock} />
//                     <InfoBlockTxt text={textBlock} />
//                     <InfoBlockTxt text={textBlock} />
//                 </div>
//                 {/* Средняя строка - 2 блока + картинка */}
//                 <div className="info_block_row middle-row">
//                     <InfoBlockTxt text={textBlock} />
//                     <div className="info_head">
//                         <img 
//                             id="img_in_info_block"
//                             src="src/assets/medical.png" 
//                             alt="Medical illustration" 
//                         />
//                     </div>
//                     <InfoBlockTxt text={textBlock} />
//                 </div>
//                 {/* Нижняя строка - 2 блока */}
//                 <div className="info_block_row bottom-row">
//                     <InfoBlockTxt text={textBlock} />
//                     <InfoBlockTxt text={textBlock} />
//                 </div>
//             </div>
//         </div>
//     );
// }
import InfoBlockTxt from "./info_block_text";
import './info_block.css';
export default function Info_block() {
    // Тексты для верхнего ряда (3 блока)
    const topRowTexts = [
        "Новое исследование в Nature: мРНК-вакцины против меланомы показали 78% эффективность в комбинации с иммунотерапией. III фаза клинических испытаний начнется в 2024 году.",
        "Революция в диагностике: ИИ-алгоритм DeepMedX обнаруживает ранние признаки болезни Паркинсона по МРТ с точностью 92% за 3 года до появления симптомов.",
        "Мета-анализ 42 исследований подтверждает: персонализированные пробиотики снижают риск антибиотико-ассоциированной диареи на 65% у пациентов старше 60 лет."
    ];
    // Тексты для среднего ряда (2 блока + изображение)
    const middleRowTexts = [
        "Биоинженерная поджелудочная железа успешно прошла доклинические испытания. Имплант поддерживает стабильный уровень глюкозы у животных с диабетом 1 типа в течение 6 месяцев.",
        "FDA одобрило первый назальный спрей с эскетамином для экстренной терапии резистентной депрессии. Клинический ответ достигается за 24 часа у 53% пациентов."
    ];
    // Тексты для нижнего ряда (2 блока)
    const bottomRowTexts = [
        "Нанороботы для тромболизиса: испытания на свиньях показали 90% эффективность в растворении тромбов без риска кровотечений. Технология получила статус 'прорывной терапии'.",
        "CRISPR-Cas9 впервые применен для редактирования генов непосредственно в организме пациента с наследственной нейропатией. Предварительные результаты обнадеживают."
    ];
    return (_jsx("div", { className: "info_block_container", children: _jsxs("div", { className: "info_block_grid", children: [_jsxs("div", { className: "info_block_row top-row", children: [_jsx(InfoBlockTxt, { text: topRowTexts[0] }), _jsx(InfoBlockTxt, { text: topRowTexts[1] }), _jsx(InfoBlockTxt, { text: topRowTexts[2] })] }), _jsxs("div", { className: "info_block_row middle-row", children: [_jsx(InfoBlockTxt, { text: middleRowTexts[0] }), _jsx("div", { children: _jsx("img", { id: "img_in_info_block", src: "./medical.png", alt: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0439 \u043D\u0430\u0443\u043A\u0438" }) }), _jsx(InfoBlockTxt, { text: middleRowTexts[1] })] }), _jsxs("div", { className: "info_block_row bottom-row", children: [_jsx(InfoBlockTxt, { text: bottomRowTexts[0] }), _jsx(InfoBlockTxt, { text: bottomRowTexts[1] })] })] }) }));
}
