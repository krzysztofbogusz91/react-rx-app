import React from 'react';
import './search-bar.scss';

function SearchBar() {
  return (
    <div className="search_bar">
      <div>
        <label htmlFor="hero-inputs">
            Search for heroes: <input />
        </label>
      </div>
    </div>
  );
}


export default SearchBar;
