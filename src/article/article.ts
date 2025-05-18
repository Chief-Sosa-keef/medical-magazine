// articlesData.ts
export interface Article {
    id: string;
    title: string;
    author: string;
    date: string;
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
    category: 'Медецинские статьи' | 'Tехнологические науки' | 'Социальные науки'; // добавляем поле категории
}

export const articles: Article[] = [
    // Медицинские статьи
    {
        id: "diabet",
        title: "Современные методы лечения диабета",
        author: "Доктор Иванова М.В.",
        date: "25 октября 2023",
        tags: [
            { text: "Диагностика", anchor: "diagnostika" },
            { text: "Лечение", anchor: "lechenie" },
            { text: "Профилактика", anchor: "profilaktika" }
        ],
        content: {
            sections: [
                {
                    id: "diagnostika",
                    title: "Современная диагностика",
                    text: "Новые методы ранней диагностики позволяют выявлять заболевание на ранних стадиях...",
                    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe"
                },
                {
                    id: "lechenie",
                    title: "Инновационное лечение",
                    text: "Последние достижения в терапии диабета включают:",
                    list: [
                        "Персонализированные схемы лечения",
                        "Искусственная поджелудочная железа",
                        "Генная терапия"
                    ]
                },
                {
                    id: "profilaktika",
                    title: "Профилактика диабета",
                    text: "Советы по профилактике заболевания...",
                    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
                }
            ]
        },
        category: 'Медецинские статьи'
    },
    {
        id: "cardio",
        title: "Новые подходы в кардиологии",
        author: "Профессор Сидоров А.П.",
        date: "10 ноября 2023",
        tags: [
            { text: "Хирургия", anchor: "surgery" },
            { text: "Реабилитация", anchor: "rehab" }
        ],
        content: {
            sections: [
                {
                    id: "surgery",
                    title: "Малоинвазивные операции",
                    text: "Современные методы хирургического вмешательства...",
                    image: "https://images.unsplash.com/photo-1581595219315"
                },
                {
                    id: "rehab",
                    title: "Реабилитация после операций",
                    text: "Эффективные методы восстановления...",
                    image: "https://images.unsplash.com/photo-1612831455540"
                },
                {
                    id: "new-tech",
                    title: "Новые технологии в кардиологии",
                    text: "Использование AI и робототехники...",
                    image: "https://images.unsplash.com/photo-1552762164-2f55b0a87277"
                }
            ]
        },
        category: 'Медецинские статьи'
    },
    {
        id: "heart-health",
        title: "Здоровое сердце: советы кардиолога",
        author: "Доктор Петрова Е.В.",
        date: "20 ноября 2023",
        tags: [
            { text: "Здоровье", anchor: "health" },
            { text: "Питание", anchor: "nutrition" },
            { text: "Фитнес", anchor: "fitness" }
        ],
        content: {
            sections: [
                {
                    id: "diet",
                    title: "Питание для сердца",
                    text: "Правильное питание помогает поддерживать сердце здоровым...",
                    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
                },
                {
                    id: "exercise",
                    title: "Физическая активность",
                    text: "Регулярные упражнения укрепляют сердечно-сосудистую систему...",
                    list: ["Бег", "Плавание", "Йога"]
                },
                {
                    id: "stress",
                    title: "Управление стрессом",
                    text: "Стресс негативно влияет на сердце, важно соблюдать баланс...",
                    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
                }
            ]
        },
        category: 'Медецинские статьи'
    },

    // Технолгические статьи
    {
        id: "ai-future",
        title: "Будущее искусственного интеллекта",
        author: "Инженер Ковалев П.Н.",
        date: "1 декабря 2023",
        tags: [
            { text: "ИИ", anchor: "ai" },
            { text: "Технологии", anchor: "tech" }
        ],
        content: {
            sections: [
                {
                    id: "development",
                    title: "Развитие ИИ",
                    text: "Современные алгоритмы позволяют создавать более умные системы...",
                    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                },
                {
                    id: "applications",
                    title: "Области применения ИИ",
                    text: "Здравоохранение, финансы, транспорт...",
                    list: ["Диагностика заболеваний", "Автономные автомобили", "Финансовое моделирование"]
                },
                {
                    id: "ethical",
                    title: "Этические вопросы ИИ",
                    text: "Обсуждение безопасности и приватности...",
                    image: "https://images.unsplash.com/photo-1503264116251-35a269479413"
                }
            ]
        },
        category: 'Tехнологические науки'
    },
    {
        id: "blockchain",
        title: "Блокчейн и криптовалюты",
        author: "Аналитик Смирнова Е.С.",
        date: "15 декабря 2023",
        tags: [
            { text: "Криптовалюты", anchor: "crypto" },
            { text: "Финансы", anchor: "finance" }
        ],
        content: {
            sections: [
                {
                    id: "basics",
                    title: "Основы блокчейна",
                    text: "Технология распределенного реестра...",
                    image: "https://images.unsplash.com/photo-1577123288703-0f33e7a1b09a"
                },
                {
                    id: "invest",
                    title: "Инвестиции в криптовалюты",
                    text: "Советы для начинающих инвесторов...",
                    list: ["Долгосрочные стратегии", "Риски", "Безопасность"]
                },
                {
                    id: "regulation",
                    title: "Правовые аспекты",
                    text: "Обзор законодательства...",
                    image: "https://images.unsplash.com/photo-1612831455540"
                }
            ]
        },
        category: 'Tехнологические науки'
    },
    {
        id: "ai-robotics",
        title: "Роботы и автоматизация",
        author: "Инженер Иванов А.А.",
        date: "20 декабря 2023",
        tags: [
            { text: "Роботы", anchor: "robots" },
            { text: "Автоматизация", anchor: "automation" }
        ],
        content: {
            sections: [
                {
                    id: "history",
                    title: "История робототехники",
                    text: "От первых роботов до современных AI-систем...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                },
                {
                    id: "applications",
                    title: "Области применения",
                    text: "Промышленность, медицина, бытовая техника...",
                    list: ["Производство", "Медицина", "Домашние роботы"]
                },
                {
                    id: "future",
                    title: "Будущее роботов",
                    text: "Интеграция AI и сенсоров...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                }
            ]
        },
        category: 'Tехнологические науки'
    },

    // Социальные статьи
    {
        id: "community",
        title: "Роль сообщества в современной жизни",
        author: "Социолог Петрова Л.В.",
        date: "5 января 2024",
        tags: [
            { text: "Общество", anchor: "society" },
            { text: "Социальные сети", anchor: "social" }
        ],
        content: {
            sections: [
                {
                    id: "importance",
                    title: "Значение сообщества",
                    text: "Сообщества помогают людям находить поддержку...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                },
                {
                    id: "digital",
                    title: "Социальные сети",
                    text: "Влияние онлайн-коммуникаций...",
                    list: ["Обмен информацией", "Формирование мнений"]
                },
                {
                    id: "challenges",
                    title: "Проблемы и вызовы",
                    text: "Дезинформация, кибербуллинг...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                }
            ]
        },
        category: 'Социальные науки'
    },
    {
        id: "community",
        title: "Роль сообщества в современной жизни",
        author: "Социолог Петрова Л.В.",
        date: "5 января 2024",
        tags: [
            { text: "Общество", anchor: "society" },
            { text: "Социальные сети", anchor: "social" }
        ],
        content: {
            sections: [
                {
                    id: "importance",
                    title: "Значение сообщества",
                    text: "Сообщества помогают людям находить поддержку...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                },
                {
                    id: "digital",
                    title: "Социальные сети",
                    text: "Влияние онлайн-коммуникаций...",
                    list: ["Обмен информацией", "Формирование мнений"]
                },
                {
                    id: "challenges",
                    title: "Проблемы и вызовы",
                    text: "Дезинформация, кибербуллинг...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                }
            ]
        },
        category: 'Социальные науки'
    },
    {
        id: "education",
        title: "Образование в цифровую эпоху",
        author: "Педагог Иванова Н.С.",
        date: "10 января 2024",
        tags: [
            { text: "Образование", anchor: "education" },
            { text: "Технологии", anchor: "tech" }
        ],
        content: {
            sections: [
                {
                    id: "online",
                    title: "Онлайн-образование",
                    text: "Плюсы и минусы дистанционных курсов...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                },
                {
                    id: "tools",
                    title: "Образовательные платформы",
                    text: "Coursera, Udemy, Khan Academy...",
                    list: ["Курсы для взрослых", "Детские программы"]
                },
                {
                    id: "future",
                    title: "Будущее образования",
                    text: "Искусственный интеллект и VR...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                }
            ]
        },
        category: 'Социальные науки'
    },{
        id: "education",
        title: "Образование в цифровую эпоху",
        author: "Педагог Иванова Н.С.",
        date: "10 января 2024",
        tags: [
            { text: "Образование", anchor: "education" },
            { text: "Технологии", anchor: "tech" }
        ],
        content: {
            sections: [
                {
                    id: "online",
                    title: "Онлайн-образование",
                    text: "Плюсы и минусы дистанционных курсов...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                },
                {
                    id: "tools",
                    title: "Образовательные платформы",
                    text: "Coursera, Udemy, Khan Academy...",
                    list: ["Курсы для взрослых", "Детские программы"]
                },
                {
                    id: "future",
                    title: "Будущее образования",
                    text: "Искусственный интеллект и VR...",
                    image: "https://images.unsplash.com/photo-1549924958-7f7b1a0b7a41"
                }
            ]
        },
        category: 'Социальные науки'
    },
    {
        id: "diabet",
        title: "Современные методы лечения диабета",
        author: "Доктор Иванова М.В.",
        date: "25 октября 2023",
        tags: [
            { text: "Диагностика", anchor: "diagnostika" },
            { text: "Лечение", anchor: "lechenie" },
            { text: "Профилактика", anchor: "profilaktika" }
        ],
        content: {
            sections: [
                {
                    id: "diagnostika",
                    title: "Современная диагностика",
                    text: "Новые методы ранней диагностики позволяют выявлять заболевание на ранних стадиях...",
                    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe"
                },
                {
                    id: "lechenie",
                    title: "Инновационное лечение",
                    text: "Последние достижения в терапии диабета включают:",
                    list: [
                        "Персонализированные схемы лечения",
                        "Искусственная поджелудочная железа",
                        "Генная терапия"
                    ]
                },
                {
                    id: "profilaktika",
                    title: "Профилактика диабета",
                    text: "Советы по профилактике заболевания...",
                    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
                }
            ]
        },
        category: 'Медецинские статьи'
    },
];