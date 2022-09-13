/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="18" viewBox="0 0 27 18" width="27" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="#C4C4C4" height="18" rx="2" width="27" />
    <path d="M0 2C0 0.89543 0.895431 0 2 0H8V18H2C0.895431 18 0 17.1046 0 16V2Z" fill="#56A94F" />
    <path d="M19 0H25C26.1046 0 27 0.895431 27 2V16C27 17.1046 26.1046 18 25 18H19V0Z" fill="#56A94F" />
    <path d="M8 0H19V18H8V0Z" fill="white" />
  </svg>
);

export default SVG;
