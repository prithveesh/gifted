import React from 'react';
import { MOBILE_BREAKPOINT } from '../../../../constants/common';

export default function() {
  return (
    <div className="logo">
      <picture>
        <source
          media={`(max-width: ${MOBILE_BREAKPOINT}px)`}
          srcSet="../../../../../static/giphy_small_hor.png"
        />
        <source
          media={`(min-width: ${MOBILE_BREAKPOINT + 1}px)`}
          srcSet="../../../../../static/giphy_small_ver.png"
        />
        <img
          src="../../../../../static/giphy_small_ver.png"
          alt="Powered by GIPHY"
        />
      </picture>
    </div>
  );
}
