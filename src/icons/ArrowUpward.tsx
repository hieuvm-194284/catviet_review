import * as React from "react";
import { SVGProps } from "react";

const ArrowUpward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="110"
    height="110"
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1_643)">
      <circle
        cx="34"
        cy="34"
        r="34"
        transform="matrix(-1 0 0 1 90 8)"
        fill="white"
      />
      <circle
        cx="34"
        cy="34"
        r="34"
        transform="matrix(-1 0 0 1 90 8)"
        stroke="#EAEAEA"
      />
    </g>
    <path
      d="M49.6324 40.155L53.7432 36.0349V54.6402C53.7432 55.473 54.4168 56.1481 55.2477 56.1481H56.7523C57.5832 56.1481 58.2568 55.473 58.2568 54.6402V36.0349L62.3676 40.155C62.9552 40.7439 63.9079 40.7439 64.4954 40.155L65.5593 39.0887C66.1469 38.4998 66.1469 37.545 65.5593 36.9562L57.0639 28.4417C56.4763 27.8528 55.5237 27.8528 54.9361 28.4417L46.4407 36.9562C45.8531 37.5451 45.8531 38.4999 46.4407 39.0887L47.5046 40.155C48.0921 40.7439 49.0448 40.7439 49.6324 40.155Z"
      fill="#ADB1B5"
    />
    <defs>
      <filter
        id="filter0_d_1_643"
        x="0.5"
        y="0.5"
        width="109"
        height="109"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="13" />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.940241 0 0 0 0 0.949995 0 0 0 0 0.956297 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_643"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_643"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default ArrowUpward;
