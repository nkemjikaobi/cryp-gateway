/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="83" viewBox="0 0 42 83" width="42" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_f_1679_20613)">
      <path d="M5 25.9983C5 14.9526 13.9543 5.99829 25 5.99829H37V77.6699H25C13.9543 77.6699 5 68.7156 5 57.6699V25.9983Z" fill="#F4CA64" />
    </g>
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="81.6716" id="filter0_f_1679_20613" width="42" x="0" y="0.998291">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_1679_20613" stdDeviation="2.5" />
      </filter>
    </defs>
  </svg>
);

export default SVG;
