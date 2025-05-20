import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './direction.css';
import { articles } from '../article/article';
import SearchBar from '../article/SearchBar';
const groupArticlesByCategory = (articles) => {
    if (!articles)
        return {};
    return articles.reduce((acc, article) => {
        const category = article.category || 'Uncategorized';
        acc[category] = acc[category] || [];
        acc[category].push(article);
        return acc;
    }, {});
};
const Direction = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [initialRender, setInitialRender] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialRender(false);
        }, 6000);
        return () => clearTimeout(timer);
    }, []);
    const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const groupedArticles = groupArticlesByCategory(filteredArticles);
    const categories = Object.entries(groupedArticles);
    if (!articles || !Array.isArray(articles)) {
        return _jsx("div", { className: "error", children: "Error loading articles" });
    }
    return (_jsx(_Fragment, { children: _jsxs("div", { id: 'for-animetion', children: [_jsx(SearchBar, { searchQuery: searchQuery, setSearchQuery: setSearchQuery, txt: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438:' }), _jsx("div", { className: "direction-container", children: categories.length === 0 ? (_jsxs(_Fragment, { children: [_jsx("div", {}), _jsx("div", { className: "no-results", children: "No articles found matching your search." })] })) : (categories.map(([category, articles], index) => (_jsxs("div", { className: "direction-card", style: {
                            animationDelay: initialRender ? `${2.5 + index * 0.3}s` : '0s'
                        }, children: [_jsx("h3", { className: "category-title", children: category }), _jsx("ul", { className: "articles-list", children: articles.map((article) => (_jsx("li", { className: "article-item", children: _jsx(Link, { to: `/article/${article.id}`, className: "article-link", children: article.title }) }, article.id))) })] }, category)))) })] }) }));
};
export default Direction;
