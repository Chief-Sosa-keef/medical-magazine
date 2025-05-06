// components/OneOfDirection.tsx
import React from 'react';
import './Direction.css';

interface OneOfDirectionProps {
  title: string;
  articles: Article[];
  animationDelay?: number;
}

interface Article {
  title: string;
  url: string;
}

const OneOfDirection: React.FC<OneOfDirectionProps> = ({ 
  title, 
  articles,
  animationDelay = 0 
}) => {
  const animationStyle = {
    animationDelay: `${animationDelay}s`
  };

  return (
    <div 
      className="direction-card"
      style={animationStyle}
    >
      <h3 className="category-title">{title}</h3>
      <ul className="articles-list">
        {articles.map((article, index) => (
          <li key={index} className="article-item">
            <a
              href={article.url}
              className="article-link"
              rel="noopener noreferrer"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OneOfDirection;