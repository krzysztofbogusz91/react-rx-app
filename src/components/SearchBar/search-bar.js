import React from 'react';
import styles from './search-bar.scss';

function SearchBar() {
  return (
    <div className={styles.search_bar}>
      <div>
        <label htmlFor="hero-inputs">
            Search for heroes: <input />
        </label>
      </div>
    </div>);
}


export default SearchBar;

