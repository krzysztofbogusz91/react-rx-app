import React from 'react';
import PropTypes from 'prop-types';

import './search-bar.scss';

function SearchBar(props) {
  const onSearch = (e) => {
    props.onSearch(e);
  };

  return (
    <div className="search_bar">
      <div>
        <label htmlFor="hero-inputs">
            Search for heroes: <input onChange={onSearch} />
        </label>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
SearchBar.defaultProps = {
  onSearch: null,
};


export default SearchBar;
