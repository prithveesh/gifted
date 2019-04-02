/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { MOBILE_BREAKPOINT } from '../../../../constants/common';
import './gridCell.scss';

function GridGif(props) {
  const { images, title, playGif } = props;
  const {
    // original, // to be used in desktop for webp or gif
    fixed_width, // to be used in mobile full view for webp or gif
    fixed_width_still, // to be used in mobile full view for webp or gif
    fixed_width_small, // to be used in very small view for webp or gif
    fixed_width_small_still,
    // fixed_width_downsampled, // to be used in mobile in grid for webp
    // looping, // to be used for full view for video
  } = images;

  return (
    <Fragment>
      {playGif ? (
        <picture>
          <source
            type="image/webp"
            media={`(max-width: ${MOBILE_BREAKPOINT}px)`}
            srcSet={fixed_width_small.webp}
          />
          <source
            media={`(max-width: ${MOBILE_BREAKPOINT}px)`}
            srcSet={fixed_width_small.url}
          />
          <source
            type="image/webp"
            media={`(min-width: ${MOBILE_BREAKPOINT + 1}px)`}
            srcSet={fixed_width.webp}
          />
          <img src={fixed_width.url} alt={title} />
        </picture>
      ) : (
        <picture>
          <source
            media={`(max-width: ${MOBILE_BREAKPOINT}px)`}
            srcSet={fixed_width_small_still.url}
          />
          <img src={fixed_width_still.url} alt={title} />
        </picture>
      )}
    </Fragment>
  );
}

export default GridGif;
