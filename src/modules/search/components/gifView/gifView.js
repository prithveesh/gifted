/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './gifView.scss';

export default function(props) {
  const { gifData, onClose } = props;
  const { images, title } = gifData;
  const { original } = images;

  function onBgClick(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
    onClose();
  }

  function onImageClick(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    }
  }

  function onMouseOver() {}

  function onMouseOut() {}

  return (
    <div className="detail-view" onClick={onBgClick}>
      <div className="image-container">
        <div className="image-title">{title}</div>
        <picture
          onClick={onImageClick}
          onFocus={onMouseOver}
          onMouseOver={onMouseOver}
          onBlur={onMouseOut}
          onMouseOut={onMouseOut}
        >
          <source type="image/webp" srcSet={original.webp} />
          <img src={original.url} alt={title} />
        </picture>
      </div>
    </div>
  );
}
