    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import './direction.css';
    import { articles } from '../article/article';
    import SearchBar from '../article/SearchBar';

    interface Article {
    id: string;
    title: string;
    category: string;
    }

    const groupArticlesByCategory = (articles: Article[]) => {
    if (!articles) return {};
    
    return articles.reduce((acc, article) => {
        const category = article.category || 'Uncategorized';
        acc[category] = acc[category] || [];
        acc[category].push(article);
        return acc;
    }, {} as Record<string, Article[]>);
    };

    const Direction: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [initialRender, setInitialRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setInitialRender(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const groupedArticles = groupArticlesByCategory(filteredArticles);
    const categories = Object.entries(groupedArticles);

    if (!articles || !Array.isArray(articles)) {
        return <div className="error">Error loading articles</div>;
    }

    return (
        <>
        <div id='for-animetion'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} txt='Введите название статьи:' />
        
        <div className="direction-container">
            {categories.length === 0 ? ( <><div></div>
            <div className="no-results">No articles found matching your search.</div></>
            ) : (
            categories.map(([category, articles], index) => (
                <div 
                key={category} 
                className="direction-card"
                style={{
                    animationDelay: initialRender ? `${2.5 + index * 0.3}s` : '0s'
                }}
                >
                <h3 className="category-title">{category}</h3>
                <ul className="articles-list">
                    {articles.map((article) => (
                    <li key={article.id} className="article-item">
                        <Link to={`/article/${article.id}`} className="article-link">
                        {article.title}
                        </Link>
                    </li>
                    ))}
                </ul>
                </div>
            ))
            )}
        </div></div>
        </>
    );
    };

    export default Direction;