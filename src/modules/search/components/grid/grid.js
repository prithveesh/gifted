import React from 'react';

import GridCell from '../gridCell/gridCell';
import './grid.scss';

function Grid(props) {
  const { results, playGif } = props;

  function createCell(gif) {
    return (
      <GridCell
        key={gif.slug}
        title={gif.title}
        images={gif.images}
        playGif={playGif}
      />
    );
  }

  return (
    <div className="wrapper">
      <div className="list-container">
        {' '}
        {results.map(gif => createCell(gif))}{' '}
      </div>
    </div>
  );
}

export default Grid;
