/* eslint-disable max-len */
import React from "react";
/**
 * button container
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="85" viewBox="0 0 298 85" width="298" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line stroke="#388F88" strokeWidth="2" x1="-8.74228e-08" x2="266.483" y1="1.44827" y2="1.44825" />
    <line stroke="#388F88" strokeWidth="2" x1="265.706" x2="296.119" y1="1.70674" y2="29.224" />
    <line stroke="#388F88" strokeWidth="2" x1="0.670913" x2="31.0847" y1="56.7412" y2="84.2585" />
    <line stroke="#388F88" strokeWidth="2" x1="296.448" x2="296.448" y1="28.5172" y2="85" />
    <line stroke="#388F88" strokeWidth="2" x1="1" x2="1" y1="1" y2="57.4828" />
    <line stroke="#388F88" strokeWidth="2" x1="30.4136" x2="296.896" y1="84" y2="84" />
    <text fill="white" fontSize="25" x="80" y="50">
      {props.text}
    </text>
  </svg>
);

export default SVG;
