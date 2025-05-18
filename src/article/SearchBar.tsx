import React from 'react';
import './SearchBar.css';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    txt:string;
    }

    const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery,txt }) => {
    return (
        <div className="search-container">
        <input
            type="text"
            placeholder={txt}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
        />
        </div>
    );
    };

    export default SearchBar;