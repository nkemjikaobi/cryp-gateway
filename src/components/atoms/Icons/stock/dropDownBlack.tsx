/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0.5L5 5.5L10 0.5" fill="black" />
  </svg>
);

export default SVG;
