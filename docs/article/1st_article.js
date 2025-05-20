import { jsx as _jsx } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { articles } from './article'; // Замените на актуальный путь
import ArticleTemplate from './shablon/ArticleTemplate';
const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Поиск статьи по id
        const foundArticle = articles.find((art) => art.id === id);
        if (foundArticle) {
            setArticle(foundArticle);
        }
        else {
            setError('Статья не найдена');
        }
        setLoading(false);
    }, [id]);
    if (loading) {
        return _jsx("div", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    }
    if (error) {
        return _jsx("div", { children: error });
    }
    if (!article) {
        return null; // или можно отобразить сообщение, что статья отсутствует
    }
    // Передача данных в компонент ArticleTemplate
    return (_jsx(ArticleTemplate, { title: article.title, author: article.author, date: article.date, tags: article.tags, content: article.content }));
};
export default ArticlePage;
