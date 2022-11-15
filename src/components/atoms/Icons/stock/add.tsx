/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z"
      stroke="#F4CA64"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="M16 10.6666V21.3333" stroke="#F4CA64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <path d="M10.6667 16H21.3333" stroke="#F4CA64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export default SVG;
