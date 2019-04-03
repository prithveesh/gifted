import React from 'react';

import SearchBox from '../searchBox/searchBox';
import Switch from '../switch/switch';

import Logo from './logo';

import './header.scss';

function Header(props) {
  const { onPlayGif, onSearch } = props;
  return (
    <header>
      <div className="banner">
        <Logo />
        <SearchBox onSearch={onSearch} />
        <Switch onPlayGif={onPlayGif} />
      </div>
    </header>
  );
}

export default Header;
