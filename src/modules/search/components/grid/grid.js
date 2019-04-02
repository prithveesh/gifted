import React from 'react';

import GridCell from '../gridCell/gridCell';

function Grid(props) {
  const { results, playGif } = props;

  function createCell(gif) {
    return (
      <div key={gif.slug} className="gif-tile">
        <p> {gif.title} </p>
        <GridCell title={gif.title} images={gif.images} playGif={playGif} />
      </div>
    );
  }

  return (
    <div className="list-container">
      {' '}
      {results.map(gif => createCell(gif))}{' '}
    </div>
  );
}

export default Grid;
