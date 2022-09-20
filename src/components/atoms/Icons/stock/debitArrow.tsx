/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="#F7E2E3" height="60" rx="12" width="60" />
    <path d="M41 36L30 25L19 36" fill="#E36363" />
  </svg>
);

export default SVG;
