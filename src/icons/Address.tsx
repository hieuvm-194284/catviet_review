import * as React from "react";
import { SVGProps } from "react";

const Address = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="17"
    height="24"
    viewBox="0 0 13 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1_632"
      // style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="17"
      height="24"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0H13V18H0V0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1_632)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.50082 8.86422C5.21834 8.86422 4.17828 7.81915 4.17828 6.53214C4.17828 5.24513 5.21834 4.20005 6.50082 4.20005C7.78166 4.20005 8.82172 5.24513 8.82172 6.53214C8.82172 7.81915 7.78166 8.86422 6.50082 8.86422ZM6.50082 0C2.91218 0 0 2.92621 0 6.53214C0 10.2599 3.76225 15.3371 5.56394 17.5507C6.04876 18.1498 6.95124 18.1498 7.4377 17.5507C9.23775 15.3371 13 10.2599 13 6.53214C13 2.92621 10.0878 0 6.50082 0Z"
        fill="#35C03C"
      />
    </g>
  </svg>
);

export default Address;
