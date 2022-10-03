/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18 6L6 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    <path d="M6 6L18 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
  </svg>
);

export default SVG;
