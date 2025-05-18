    import { useParams } from 'react-router-dom';
    import { useState, useEffect } from 'react';
    import { articles, Article } from './article'; // Замените на актуальный путь
    import ArticleTemplate from './shablon/ArticleTemplate';

    const ArticlePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Поиск статьи по id
        const foundArticle = articles.find((art) => art.id === id);
        if (foundArticle) {
        setArticle(foundArticle);
        } else {
        setError('Статья не найдена');
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return null; // или можно отобразить сообщение, что статья отсутствует
    }

    // Передача данных в компонент ArticleTemplate
    return (
        <ArticleTemplate
        title={article.title}
        author={article.author}
        date={article.date}
        tags={article.tags}
        content={article.content}
        />
    );
    };

export default ArticlePage;