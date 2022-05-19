import * as React from "react";
import PropTypes from "prop-types";

const IconDone = (props) => (
  <svg
    width={107}
    height={102}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 107 102"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.366 37.387c-5.821 8.117-5.821 19.109 0 27.226l19.968 27.839c5.821 8.117 16.14 11.513 25.56 8.413l32.308-10.634C95.622 87.131 102 78.24 102 68.206V33.794c0-10.033-6.378-18.925-15.798-22.025L53.895 1.135c-9.42-3.1-19.74.296-25.561 8.413L8.366 37.388Z"
      fill="url(#a)"
      fillOpacity={0.25}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M103.944 39.453a23.341 23.341 0 0 1 0 23.094L88.6 89.453C84.525 96.598 76.994 101 68.844 101H38.156c-8.15 0-15.68-4.402-19.756-11.547L3.056 62.547a23.342 23.342 0 0 1 0-23.094L18.4 12.547C22.475 5.402 30.006 1 38.156 1h30.688c8.15 0 15.68 4.402 19.756 11.547l15.344 26.906Z"
      fill="url(#b)"
      fillOpacity={0.25}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.925 20.91a15.602 15.602 0 0 1 18.15 0l18.56 13.312c5.41 3.882 7.675 10.761 5.608 17.041l-7.089 21.539c-2.067 6.28-7.995 10.531-14.684 10.531H41.53c-6.69 0-12.617-4.251-14.684-10.531l-7.09-21.539c-2.066-6.28.198-13.16 5.61-17.04L43.925 20.91Z"
      fill="url(#c)"
      fillOpacity={0.25}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M73.312 37.596c.888.821.92 2.185.073 3.045L50.052 64.333a2.257 2.257 0 0 1-1.63.667 2.255 2.255 0 0 1-1.616-.698L34.584 51.378a2.108 2.108 0 0 1 .137-3.043 2.272 2.272 0 0 1 3.14.133l10.616 11.225L70.17 37.667a2.272 2.272 0 0 1 3.142-.071Z"
      fill="#F2F2F3"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(48.99995 -51.00002 38.36416 36.85964 53 51)"
      >
        <stop stopColor="#801AB3" stopOpacity={0} />
        <stop offset={1} stopColor="#4C4CFF" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(53.50001 -50.00001 37.55596 40.18488 53.5 51)"
      >
        <stop stopColor="#801AB3" stopOpacity={0} />
        <stop offset={1} stopColor="#4C4CFF" />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(136.146 16.302 36) scale(47.1499 35.4679)"
      >
        <stop stopColor="#801AB3" stopOpacity={0} />
        <stop offset={1} stopColor="#4C4CFF" stopOpacity={0.5} />
      </radialGradient>
    </defs>
  </svg>
);

IconDone.propTypes = {
  props: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default IconDone;
