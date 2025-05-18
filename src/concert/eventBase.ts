export type EventType = 'conference' | 'webinar' | 'workshop' | 'all';

export interface Events {
    id: string;
    eventTitle: string;
    organizer: string;
    date: string;
    location: string;
    type: EventType;
    tags: Array<{ text: string; anchor: string }>;
    content: {
        sections: Array<{
            id: string;
            title: string;
            text: string;
            image?: string;
            list?: string[];
        }>;
    };
}

export const eventBase: Events[] = [
    {
        id: "Digital-future",
        eventTitle: "Digital Future Conference 2024",
        organizer: "Tech Innovations Inc.",
        date: "15-17 ноября 2024",
        location: "Москва, Крокус Экспо",
        type: "conference",
        tags: [
            { text: "Программа", anchor: "program" },
            { text: "Спикеры", anchor: "speakers" },
            { text: "Регистрация", anchor: "registration" }
        ],
        content: {
            sections: [
                {
                    id: "program",
                    title: "Программа мероприятия",
                    text: "Трехдневная программа, охватывающая ключевые аспекты цифровых технологий:",
                    list: [
                        "День 1: Искусственный интеллект и машинное обучение",
                        "День 2: Кибербезопасность и блокчейн",
                        "День 3: Будущее Web 3.0 и метавселенные"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "speakers",
                    title: "Ключевые спикеры",
                    text: "В конференции примут участие ведущие эксперты отрасли:",
                    list: [
                        "Илон Маск - Основатель SpaceX",
                        "Сундар Пичаи - CEO Google",
                        "Марк Цукерберг - CEO Meta"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                }
            ]
        }
    },
    {
        id: "med-conf-2024",
        eventTitle: "Международная Медицинская Конференция 2024",
        organizer: "Медицинская Ассоциация",
        date: "20-22 марта 2024",
        location: "Санкт-Петербург, Ленэкспо",
        type: "conference",
        tags: [
            { text: "Программа", anchor: "program" },
            { text: "Регистрация", anchor: "registration" }
        ],
        content: {
            sections: [
                {
                    id: "program",
                    title: "Программа",
                    text: "Современные тенденции в медицинских исследованиях:",
                    list: [
                        "День 1: Инновации в хирургии",
                        "День 2: Цифровая медицина",
                        "День 3: Клинические исследования"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                }
            ]
        }
    },
    {
        id: "gen-webinar",
        eventTitle: "Генетика в практике",
        organizer: "Институт Генетики",
        date: "10 декабря 2023, 15:00",
        location: "Онлайн",
        type: "webinar",
        tags: [
            { text: "Программа", anchor: "program" }
        ],
        content: {
            sections: [
                {
                    id: "main",
                    title: "Описание",
                    text: "Практические аспекты применения генетических исследований в клинической практике...",
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                }
            ]
        }
    },
    {
        id: "design-workshop",
        eventTitle: "Интенсив по цифровому дизайну",
        organizer: "Creative Studio Pro",
        date: "12-14 апреля 2024",
        location: "Онлайн",
        type: "workshop",
        tags: [
            { text: "Программа", anchor: "program" },
            { text: "Материалы", anchor: "materials" },
            { text: "Регистрация", anchor: "registration" }
        ],
        content: {
            sections: [
                {
                    id: "program",
                    title: "Расписание занятий",
                    text: "Практические занятия по современным инструментам дизайна:",
                    list: [
                        "День 1: Основы Figma и прототипирование",
                        "День 2: 3D-моделирование в Blender",
                        "День 3: Анимация в After Effects"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "materials",
                    title: "Необходимые материалы",
                    text: "Для участия потребуется:",
                    list: [
                        "Ноутбук с установленным ПО",
                        "Графический планшет",
                        "Доступ к облачному хранилищу"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "speakers",
                    title: "Преподаватели",
                    text: "Ведущие специалисты индустрии:",
                    list: [
                        "Иван Петров - арт-директор Adobe",
                        "Анна Сидорова - 3D-художник Pixar",
                        "Михаил Иванов - моушн-дизайнер Студии Артемия Лебедева"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                }
            ]
        }
    },
    {
        id: "eco-conf-2024",
        eventTitle: "Эко-Технологии 2024",
        organizer: "Green Earth Foundation",
        date: "5-7 мая 2024",
        location: "Москва, ЭкоЦентр",
        type: "conference",
        tags: [
            { text: "Программа", anchor: "program" },
            { text: "Спикеры", anchor: "speakers" },
            { text: "Экскурсии", anchor: "tours" }
        ],
        content: {
            sections: [
                {
                    id: "program",
                    title: "Экологическая программа",
                    text: "Основные темы конференции:",
                    list: [
                        "День 1: Возобновляемая энергетика",
                        "День 2: Рециклинг технологий",
                        "День 3: Города будущего"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "speakers",
                    title: "Эксперты",
                    text: "Участники дискуссий:",
                    list: [
                        "Грета Тунберг - эко-активист",
                        "Илон Маск - Tesla Energy",
                        "Сергей Иванов - министр экологии РФ"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "tours",
                    title: "Технические туры",
                    text: "Посещение уникальных объектов:",
                    list: [
                        "Солнечная электростанция",
                        "Завод по переработке пластика",
                        "Умный экодом"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                }
            ]
        }
    },
    {
        id: "digital-marketing-webinar",
        eventTitle: "Digital Marketing Trends 2024",
        organizer: "Digital Marketing Agency",
        date: "18 июня 2024, 11:00",
        location: "Онлайн",
        type: "webinar",
        tags: [
            { text: "Программа", anchor: "program" },
            { text: "Регистрация", anchor: "registration" }
        ],
        content: {
            sections: [
                {
                    id: "description",
                    title: "О вебинаре",
                    text: "Разберем ключевые тренды цифрового маркетинга на 2024 год:",
                    list: [
                        "Нейромаркетинг",
                        "AI-оптимизация рекламы",
                        "Видеоконтент нового поколения"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "program",
                    title: "Программа",
                    text: "Расписание выступлений:",
                    list: [
                        "11:00 - Кейсы TikTok-маркетинга",
                        "12:30 - Инструменты аналитики",
                        "14:00 - Нейросети для контента"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                },
                {
                    id: "speakers",
                    title: "Эксперты",
                    text: "Спикеры вебинара:",
                    list: [
                        "Марк Цукерберг - Meta Platforms",
                        "Сара Блейк - Google Ads",
                        "Алексей Смирнов - Яндекс.Маркет"
                    ],
                    image: "https://edu.vgsa.ru/pluginfile.php/182129/course/section/67878/marketingovoe-issledovanie-potrebitelej.jpg"
                }
            ]
        }
    }
];