import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={15}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.136 4.03c1.009.253 1.009 1.687 0 1.94L1.993 9.018a1 1 0 0 1-1.243-.97V1.952a1 1 0 0 1 1.243-.97L14.136 4.03Z"
      fill="#fff"
    />
    <path
      d="M14.136 4.03c1.009.253 1.009 1.687 0 1.94L1.993 9.018a1 1 0 0 1-1.243-.97V1.952a1 1 0 0 1 1.243-.97L14.136 4.03Z"
      stroke="#fff"
    />
  </svg>
)

export default SvgComponent
