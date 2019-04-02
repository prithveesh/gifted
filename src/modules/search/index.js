/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import fetchGifs from './api/results';
import { getScrollEnd } from '../../lib/utils';

// Components
import Grid from './components/grid/grid';
import SearchBox from './components/searchBox/searchBox';

import './style.scss';

function SearchModule() {
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [paginationData, setPaginationData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [playGif, setPlayGif] = useState(false);
  const isMount = useRef(false);

  function parseData(res) {
    if (res) {
      if (res.data) {
        setSearchData([...searchData, ...res.data]);
      }
      if (res.pagination) {
        setPaginationData(res.pagination);
      }
      setIsFetching(false);
    }
  }

  function getGifs(value, offset = 0) {
    if (offset === paginationData.offset && searchData.length) {
      return;
    }
    const result = fetchGifs(value, offset);
    result.then(res => parseData(res));
  }

  function onPlayGif() {
    setPlayGif(!playGif);
  }

  function onSearch(value) {
    setSearchData([]);
    setSearchValue(value);
  }

  function onInfiniteScroll() {
    const { offset, count } = paginationData;
    getGifs(searchValue, offset + count);
  }

  function onScroll() {
    const isScrollEnd = getScrollEnd();
    if (!isScrollEnd || isFetching) {
      return;
    }
    setIsFetching(true);
  }

  // Hit API whenever search value changes
  useEffect(() => {
    if (!isMount.current) return;
    getGifs(searchValue);
  }, [getGifs, searchValue]);

  useEffect(() => {
    if (!isMount.current || !isFetching || !searchData || !searchData.length) {
      return;
    }
    onInfiniteScroll();
  }, [isFetching, onInfiniteScroll, searchData]);

  // ComponentDidMount & ComponentWillUnmount
  useEffect(() => {
    isMount.current = true;
    getGifs();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [getGifs, onScroll]);

  return (
    <div>
      <SearchBox onSearch={onSearch} />
      <button type="button" onClick={onPlayGif}>
        Toggle Play
      </button>
      {searchData && searchData.length && (
        <Grid results={searchData} playGif={playGif} />
      )}
    </div>
  );
}

export default SearchModule;
