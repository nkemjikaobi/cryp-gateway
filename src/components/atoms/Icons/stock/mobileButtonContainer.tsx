/* eslint-disable max-len */
import React from "react";
/**
 * button container
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="71" viewBox="0 0 243 71" width="243" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line stroke="#388F88" strokeWidth="2" x1="-8.74228e-08" x2="217.21" y1="1.94632" y2="1.9463" />
    <line stroke="#388F88" strokeWidth="2" x1="216.7" x2="241.49" y1="2.20478" y2="24.6341" />
    <line stroke="#388F88" strokeWidth="2" x1="0.670913" x2="25.4612" y1="47.0633" y2="69.4926" />
    <line stroke="#388F88" strokeWidth="2" x1="241.819" x2="241.819" y1="24.1951" y2="70.2341" />
    <line stroke="#388F88" strokeWidth="2" x1="1" x2="1" y1="1.76584" y2="47.8049" />
    <line stroke="#388F88" strokeWidth="2" x1="24.7903" x2="242" y1="69.2341" y2="69.2341" />
    <text fill="white" fontSize="25" x="60" y="40">
      {props.text}
    </text>
  </svg>
);

export default SVG;
