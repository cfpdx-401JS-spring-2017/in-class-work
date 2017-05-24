import React from 'react';
import './Search.css';

export default function Search({ search, onSearch }) {
    return (
        <form className="search" onSubmit={e => {
            e.preventDefault();
            onSearch(e.target.elements.search.value);
        }}>
            <label>
                Search for:
                <input name="search" defaultValue={search}/>
            </label>   
            <button type="submit">GO!</button>
        </form>    
    );
}
