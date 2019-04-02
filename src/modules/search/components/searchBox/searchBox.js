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
    onSearch(searchValue);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">
          <input id="search" type="text" onChange={onChange} />{' '}
        </label>
      </form>
    </div>
  );
}

export default SearchBox;
