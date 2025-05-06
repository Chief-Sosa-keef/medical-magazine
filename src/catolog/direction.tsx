// components/Direction.tsx
import React from 'react';
import OneOfDirection from './one_of_direct';
import './Direction.css';

interface Category {
    title: string;
    articles: Article[];
    }

    interface Article {
    title: string;
    url: string;
    }

    const Direction: React.FC = () => {
    const categories: Category[] = [
        {
        title: "Социально-гуманитарные науки",
        articles: Array(8).fill(null).map((_, i) => ({
            title: `Статья ${i + 1} о социальных исследованиях`,
            url: "1tx_h.html"
        }))
        },
        {
        title: "Медицинские науки",
        articles: Array(6).fill(null).map((_, i) => ({
            title: `Исследование ${i + 1} в области кардиологии`,
            url: "#"
        }))
        },
        {
        title: "Технические науки",
        articles: Array(5).fill(null).map((_, i) => ({
            title: `Инновации ${i + 1} в биомедицинской инженерии`,
            url: "#"
        }))
        }
    ];

    return (
        <div className="direction-container">
        {categories.map((category, index) => (
            <OneOfDirection 
            key={category.title}
            title={category.title}
            articles={category.articles}
            animationDelay={index * 0.2 + 0.2}
            />
        ))}
        </div>
    );
    };

export default Direction;