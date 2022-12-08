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
      d="M.864 5.97c-1.009-.253-1.009-1.687 0-1.94L13.007.982a1 1 0 0 1 1.243.97v6.096a1 1 0 0 1-1.243.97L.864 5.97Z"
      fill="#fff"
    />
    <path
      d="M.864 5.97c-1.009-.253-1.009-1.687 0-1.94L13.007.982a1 1 0 0 1 1.243.97v6.096a1 1 0 0 1-1.243.97L.864 5.97Z"
      stroke="#fff"
    />
  </svg>
)

export default SvgComponent
