import React from 'react';

import GridCell from '../gridCell/gridCell';
import './grid.scss';

function Grid(props) {
  const { results, playGif, openGif } = props;

  return (
    <div className="wrapper">
      <div className="list-container">
        {results.map(gif => {
          return (
            <GridCell
              key={gif.slug}
              title={gif.title}
              images={gif.images}
              playGif={playGif}
              openGif={openGif}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
