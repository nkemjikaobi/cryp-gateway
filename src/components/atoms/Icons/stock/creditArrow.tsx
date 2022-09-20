/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="#E7FFFE" height="60" rx="12" width="60" />
    <path d="M19 25L30 36L41 25" fill="#6ED7D3" />
  </svg>
);

export default SVG;
