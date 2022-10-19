/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="42" viewBox="0 0 42 42" width="42" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.95">
      <path d="M31.5 10.5L10.5 31.5" stroke="#F4CA64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M10.5 10.5L31.5 31.5" stroke="#F4CA64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </g>
  </svg>
);

export default SVG;
