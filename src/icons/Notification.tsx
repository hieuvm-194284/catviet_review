import * as React from "react";
import { SVGProps } from "react";

const Notification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5003 26.0278C25.7242 26.0278 29.5287 24.9728 29.8962 20.7382C29.8962 16.5065 27.2437 16.7787 27.2437 11.5866C27.2437 7.531 23.3996 2.91663 17.5003 2.91663C11.601 2.91663 7.75698 7.531 7.75698 11.5866C7.75698 16.7787 5.10449 16.5065 5.10449 20.7382C5.47338 24.9888 9.27791 26.0278 17.5003 26.0278Z"
      stroke="#253D60"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.9839 30.4167C18.9946 32.6257 15.8912 32.6519 13.8828 30.4167"
      stroke="#253D60"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="24" cy="6" r="5" fill="#FF0B0B" />
  </svg>
);

export default Notification;
