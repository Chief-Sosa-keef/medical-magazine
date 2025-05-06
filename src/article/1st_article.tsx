import ArticleTemplate from "./Шаблон/ArticleTemplate";

const MedicalArticlePage = () => {
    return (
        
        <ArticleTemplate
        title="Современные методы лечения диабета"
        author="Доктор Иванова М.В."
        date="25 октября 2023"
        tags={[
        { text: 'Диагностика', anchor: 'diagnostika' },
            { text: 'Лечение', anchor: 'lechenie' },
            { text: 'Профилактика', anchor: 'profilaktika' }
            ]}
            content={{
            sections: [
                {
                id: 'diagnostika',
                title: "Современная диагностика",
                text: "Новые методы ранней диагностики...",
                image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format"
                },
                {
                id: 'lechenie',
                title: "Инновационное лечение",
                text: "Последние достижения в терапии...",
                list: [
                    "Препараты нового поколения",
                    "Персонализированные схемы",
                    "Хирургические методы"
                ]
                },
                {
                id: 'profilaktika',
                title: "Профилактические меры",
                text: "Эффективные методы профилактики...",
                image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop&crop=entropy&auto=format"
                }
            ]
            }}
        />
        );
    };

    export default MedicalArticlePage;