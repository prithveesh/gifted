/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable camelcase */
import React, { useState, useEffect, useRef } from 'react';
// import { MOBILE_BREAKPOINT } from '../../../../constants/common';
import './gridCell.scss';

function GridGif(props) {
  const [isPlay, setPlay] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const cellRef = useRef();

  const { images, title, playGif, openGif } = props;
  const {
    // original, // to be used in desktop for webp or gif
    fixed_width, // to be used in mobile full view for webp or gif
    // fixed_width_still, // to be used in mobile full view for webp or gif
    // fixed_width_small, // to be used in very small view for webp or gif
    // fixed_width_small_still,
    // fixed_width_downsampled, // to be used in mobile in grid for webp
    // looping, // to be used for full view for video
  } = images;

  const jpg = images['480w_still'];

  const divStyle = {
    width: `${fixed_width.width}px`,
    height: `${fixed_width.height}px`,
    backgroundImage: `url(${jpg.url})`,
    backgroundSize: 'contain',
  };

  function onMouseOver() {
    setPlay(true);
  }

  function onMouseOut() {
    setPlay(false);
  }

  function onClick() {
    openGif({ images, title });
  }

  const intersectionCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    });
  };

  useEffect(() => {
    const ref = cellRef.current;
    let observer;
    if (window && window.IntersectionObserver) {
      observer = new IntersectionObserver(intersectionCallback);
      observer.observe(ref);
    } else if (window) {
      console.log('IntersectionObserver not supported');
      setShowImage(true);
    }
    return () => {
      if (observer) observer.unobserve(ref);
    };
  }, []);

  return (
    <div
      className="grid-cell"
      style={divStyle}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
      ref={cellRef}
    >
      {(playGif || isPlay) && showImage && (
        <picture>
          {/* <source
            type="image/webp"
            media={`(max-width: ${MOBILE_BREAKPOINT}px)`}
            srcSet={fixed_width.webp}
          />
          <source
            media={`(max-width: ${MOBILE_BREAKPOINT}px)`}
            srcSet={fixed_width.url}
          />
          <source
            type="image/webp"
            media={`(min-width: ${MOBILE_BREAKPOINT + 1}px)`}
            srcSet={fixed_width.webp}
          /> */}
          <source type="image/webp" srcSet={fixed_width.webp} />
          <img src={fixed_width.url} alt={title} />
        </picture>
      )}
    </div>
  );
}

export default GridGif;
