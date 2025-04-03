import React, { useState } from 'react';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
    placeholder?: string;
    initalState?: string;
    onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder = "Search...", initalState, onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState(initalState || "");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch(query);
        }
    };

    return (
        <div className={styles.search}>
            <input
                type="text"
                className={styles.search__input}
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default SearchBar;