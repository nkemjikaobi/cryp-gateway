/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity="0.7">
      <path d="M21 10H3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21 6H3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21 14H3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M21 18H3" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </g>
  </svg>
);

export default SVG;
