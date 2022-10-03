/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="59" viewBox="0 0 59 59" width="59" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_d_1247_7829)">
      <circle cx="29.5" cy="24.5" fill="#6ED7D3" r="19.5" />
    </g>
    <path
      d="M34.0429 31.8624C34.3992 31.9059 34.7234 31.6524 34.7669 31.296L35.4763 25.4892C35.5198 25.1329 35.2662 24.8087 34.9099 24.7652C34.5536 24.7216 34.2294 24.9752 34.1859 25.3316L33.5553 30.4932L28.3937 29.8626C28.0373 29.8191 27.7132 30.0727 27.6696 30.429C27.6261 30.7853 27.8797 31.1095 28.236 31.153L34.0429 31.8624ZM22.488 17.4005L33.6097 31.6177L34.6336 30.8167L23.512 16.5995L22.488 17.4005Z"
      fill="black"
    />
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="59" id="filter0_d_1247_7829" width="59" x="0" y="0">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="5" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.843137 0 0 0 0 0.827451 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1247_7829" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1247_7829" mode="normal" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SVG;
