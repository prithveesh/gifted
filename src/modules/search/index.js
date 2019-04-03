/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import fetchGifs from './api/results';
import { getScrollEnd } from '../../lib/utils';

// Components
import HeaderComponent from './components/header/header';
import Grid from './components/grid/grid';
import Loader from './components/loader/loader';
import GifView from './components/gifView/gifView';
import './search.scss';

function SearchModule() {
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [paginationData, setPaginationData] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [playGif, setPlayGif] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [gifData, setGifData] = useState(null);
  const isMount = useRef(false);

  function parseData(res) {
    if (res) {
      if (res.data) {
        setSearchData([...searchData, ...res.data]);
      }
      if (res.pagination) {
        setPaginationData(res.pagination);
      }
    }
    setIsFetching(false);
    setShowLoader(false);
  }

  function getGifs(value, offset = 0) {
    if (offset === paginationData.offset && searchData.length) {
      return;
    }
    setShowLoader(true);
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

  function openGif(obj) {
    setGifData(obj);
  }

  function closeGif() {
    setGifData(null);
  }

  // Hit API whenever search value changes
  useEffect(() => {
    if (!isMount.current) return;
    getGifs(searchValue);
  }, [searchValue]);

  useEffect(() => {
    if (!isMount.current || !isFetching || !searchData || !searchData.length) {
      return;
    }
    onInfiniteScroll();
  }, [isFetching]);

  // ComponentDidMount & ComponentWillUnmount
  useEffect(() => {
    isMount.current = true;
    getGifs();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="search-wrapper">
      <HeaderComponent onSearch={onSearch} onPlayGif={onPlayGif} />
      {searchData && searchData.length && (
        <Grid
          results={searchData}
          playGif={playGif && !gifData}
          openGif={openGif}
        />
      )}
      {showLoader && <Loader />}
      {gifData && <GifView gifData={gifData} onClose={closeGif} />}
    </div>
  );
}

export default SearchModule;
