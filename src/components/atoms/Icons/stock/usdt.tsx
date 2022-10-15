/* eslint-disable max-len */
import React from "react";
/**
 * @param {Object} props Component props
 * @return {React.Component} React component
 */
const SVG = (props: any): unknown => (
  <svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect fill="#E7FFFE" height="50" rx="12" width="50" />
    <g clipPath="url(#clip0_1257_8608)">
      <path d="M25 41C33.8366 41 41 33.8366 41 25C41 16.1634 33.8366 9 25 9C16.1634 9 9 16.1634 9 25C9 33.8366 16.1634 41 25 41Z" fill="#26A17B" />
      <path
        clipRule="evenodd"
        d="M26.922 26.383V26.381C26.812 26.389 26.245 26.423 24.98 26.423C23.97 26.423 23.259 26.393 23.009 26.381V26.384C19.121 26.213 16.219 25.536 16.219 24.726C16.219 23.917 19.121 23.24 23.009 23.066V25.71C23.263 25.728 23.991 25.771 24.997 25.771C26.204 25.771 26.809 25.721 26.922 25.711V23.068C30.802 23.241 33.697 23.918 33.697 24.726C33.697 25.536 30.802 26.211 26.922 26.383ZM26.922 22.793V20.427H32.336V16.819H17.595V20.427H23.009V22.792C18.609 22.994 15.3 23.866 15.3 24.91C15.3 25.954 18.609 26.825 23.009 27.028V34.61H26.922V27.026C31.3151 26.824 34.616 25.953 34.616 24.91C34.616 23.867 31.3151 22.996 26.922 22.793Z"
        fill="white"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_1257_8608">
        <rect fill="white" height="32" transform="translate(9 9)" width="32" />
      </clipPath>
    </defs>
  </svg>
);

export default SVG;
