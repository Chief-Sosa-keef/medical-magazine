import React from 'react';
import './ArticleTemplate.css';

interface Section {
    id: string;
    title: string;
    text: string;
    image?: string;
    list?: string[];
    }

    interface ArticleTemplateProps {
    title: string;
    author: string;
    date: string;
    tags: Array<{
        text: string;
        anchor: string;
    }>;
    content: {
        sections: Section[];
    };
    }

    const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
    title,
    author,
    date,
    tags,
    content
    }) => {
    return (
        <div className="article-container">
        <header className="article-header">
            <div className="meta-info">
            <span className="author">{author}</span>
            <span className="date">{date}</span>
            <div className="tags">
                {tags.map(tag => (
                <a 
                    key={tag.anchor} 
                    href={`#${tag.anchor}`}
                    className="tag anchor-link"
                >
                    {tag.text}
                </a>
                ))}
            </div>
            </div>
            <h1 className="article-title">{title}</h1>
        </header>

        <main className="article-content">
            {content.sections.map((section) => (
            <section 
                key={section.id} 
                id={section.id}
                className="article-section"
            >
                <h2 className="section-title">{section.title}</h2>
                {section.image && (
                <div className="image-container">
                    <img
                    src={section.image}
                    alt={section.title}
                    className="section-image"
                    />
                </div>
                )}
                <p className="section-text">{section.text}</p>
                {section.list && (
                <ul className="section-list">
                    {section.list.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                    ))}
                </ul>
                )}
            </section>
            ))}
        </main>
        </div>
    );
    };

export default ArticleTemplate;
