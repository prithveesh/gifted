/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';

function SearchBox(props) {
  const { onSearch } = props;
  const [searchValue, setSearchValue] = useState('');

  function onChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();
    onSearch(searchValue);
  }

  return (
    <div className="searchBox">
      <form onSubmit={onSubmit} autoComplete="off">
        <label htmlFor="search">
          <input
            id="search"
            type="text"
            onChange={onChange}
            placeholder="Search Your GIF"
          />
          <img
            alt="search"
            src="../../../../../static/search.png"
            onClick={onSubmit}
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBox;
