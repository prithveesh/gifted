/* eslint-disable camelcase */
import React, { Fragment } from 'react';

function GridGif(props) {
  const { images, title, playGif } = props;
  const {
    // original, // to be used in desktop for webp or gif
    fixed_width, // to be used in mobile full view for webp or gif
    fixed_width_still, // to be used in mobile full view for webp or gif
    // fixed_width_small, // to be used in very small view for webp or gif
    fixed_width_downsampled, // to be used in mobile in grid for webp
    // looping, // to be used for full view for video
  } = images;
  return (
    <Fragment>
      {playGif ? (
        <picture>
          <source
            type="image/webp"
            media="(max-width: 464px)"
            srcSet={fixed_width_downsampled.webp}
          />
          <source
            media="(max-width: 464px)"
            srcSet={fixed_width_downsampled.url}
          />
          <source
            type="image/webp"
            media="(min-width: 465px)"
            srcSet={fixed_width.webp}
          />
          <img src={fixed_width.url} alt={title} />
        </picture>
      ) : (
        <img src={fixed_width_still.url} alt={title} />
      )}
    </Fragment>
  );
}

export default GridGif;
