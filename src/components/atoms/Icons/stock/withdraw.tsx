/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="59" viewBox="0 0 59 59" width="59" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_d_1247_7834)">
      <circle cx="29.5" cy="24.5" fill="#F4CA64" r="19.5" />
    </g>
    <path
      d="M34.4081 15.822C34.3099 15.4768 33.9503 15.2765 33.6051 15.3747L27.9784 16.9759C27.6332 17.0741 27.4329 17.4337 27.5312 17.7789C27.6294 18.1242 27.989 18.3245 28.3342 18.2262L33.3357 16.803L34.7589 21.8045C34.8571 22.1497 35.2167 22.35 35.562 22.2517C35.9072 22.1535 36.1075 21.7939 36.0093 21.4487L34.4081 15.822ZM25.5679 32.0858L34.3508 16.3162L33.2151 15.6837L24.4321 31.4533L25.5679 32.0858Z"
      fill="black"
    />
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="59" id="filter0_d_1247_7834" width="59" x="0" y="0">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="5" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.956863 0 0 0 0 0.792157 0 0 0 0 0.392157 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1247_7834" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1247_7834" mode="normal" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SVG;
