import React from 'react';

import SearchBox from '../searchBox/searchBox';
import Logo from './logo';

import './header.scss';

function Header(props) {
  return (
    <header>
      <div className="banner">
        <Logo />
        <SearchBox {...props} />
      </div>
    </header>
  );
}

export default Header;
