import React from 'react';
import './ArticleTemplate.css';

interface Section {
    id: string;
    title: string;
    text: string;
    image?: string;
    imageAlt?: string;
    list?: string[];
}

interface Source {
    text: string;
    url?: string;
}

interface Tag {
    text: string;
    anchor: string;
}

interface Author {
    name: string;
    contact?: {
        phone?: string;
        email?: string;
    };
    affiliation?: string;
}

interface ArticleTemplateProps {
    title: string;
    authors: Author[];
    date?: string;
    tags: Tag[];
    content: {
        sections: Section[];
        sources?: Source[]; // Добавляем источники
    };
    keywords?: string[];
    description?: string;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
    title,
    authors,
    date,
    tags,
    content,
    keywords = [],
    description = ''
}) => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "datePublished": date,
        "author": authors.map(author => ({
            "@type": "Person",
            "name": author.name,
            "affiliation": author.affiliation
        })),
        "keywords": keywords.join(', '),
        "description": description,
        "articleBody": content.sections.map(section => section.text).join(' ')
    };
        return (
            <div className="article-container">
                {/* SEO-метатеги */}
                {/* <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords.join(', ')} />
                    <script type="application/ld+json">
                        {JSON.stringify(schemaData)}
                    </script>
                </Helmet> */}

                <article itemScope itemType="http://schema.org/Article">
                    <header className="article-header">
                        <div className="meta-info" itemProp="publisher" itemScope itemType="http://schema.org/Organization">
                            <meta itemProp="name" content="Медицинский журнал ИнгГУ" />
                        </div>
                        
                        <h1 className="article-title" itemProp="headline">{title}</h1>
                        
                        <div className="author-info">
                            {authors.map((author, index) => (
                                <div key={index} itemProp="author" itemScope itemType="http://schema.org/Person">
                                    <meta itemProp="name" content={author.name} />
                                    {author.affiliation && 
                                        <meta itemProp="affiliation" content={author.affiliation} />}
                                </div>
                            ))}
                        </div>

                        <div className="article-meta">
                            {date && <time itemProp="datePublished" dateTime={date}>{date}</time>}
                            <div className="tags">
                                {tags.map(tag => (
                                    <a 
                                        key={tag.anchor} 
                                        href={`#${tag.anchor}`}
                                        className="tag anchor-link"
                                        itemProp="keywords"
                                    >
                                        {tag.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </header>

                   <main className="article-content" itemProp="articleBody">
    {content.sections.map((section) => (
        <section 
            key={section.id} 
            id={section.id}
            className="article-section"
        >
            <h2 className="section-title">{section.title}</h2>
            
            {section.image && (
                <figure className="image-container">
                    <img
                        src={section.image}
                        alt={section.imageAlt || section.title}
                        className="section-image"
                        itemProp="image"
                    />
                    {section.imageAlt && 
                        <figcaption className="image-caption">
                            {section.imageAlt}
                        </figcaption>
                    }
                </figure>
            )}
            
            <div 
                className="section-text" 
                dangerouslySetInnerHTML={{ __html: section.text }} 
                itemProp="text" 
            />
            
            {section.list && (
                <ul className="section-list">
                    {section.list.map((item, index) => (
                        <li key={index} className="list-item" itemProp="itemListElement">
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    ))}
    
    {content.sources && (
        <section className="article-section sources-section">
            <h2 className="section-title">Источники и ссылки</h2>
            <ul className="sources-list">
                {content.sources.map((source, index) => (
                    <li key={index} className="source-item">
                        <a 
                            href={source.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="source-link"
                        >
                            {source.text}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )}
</main>

                    {/* Дополнительные мета-данные */}
                    <meta itemProp="inLanguage" content="ru-RU" />
                    <meta itemProp="dateModified" content={date || new Date().toISOString()} />
                </article>
            </div>
        );
    };

    export default ArticleTemplate;