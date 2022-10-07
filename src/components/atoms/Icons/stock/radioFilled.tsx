/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12.5" cy="12.5" fill="#388F88" r="8.5" />
    <circle cx="12.5" cy="12.5" r="12" stroke="#808080" />
  </svg>
);

export default SVG;
