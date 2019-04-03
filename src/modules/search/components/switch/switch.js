/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './switch.scss';

export default function(props) {
  const { onPlayGif } = props;
  function onClick(event) {
    const { value } = event.target;
    onPlayGif(value);
  }
  return (
    <div className="switch">
      <input
        className="tgl tgl-flip"
        id="cb5"
        type="checkbox"
        onClick={onClick}
      />
      <label
        className="tgl-btn"
        data-tg-off="Play"
        data-tg-on="Pause"
        htmlFor="cb5"
      />
    </div>
  );
}
