import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackBtn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    stroke="white"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-chevron-left"
    {...props}
  >
    <Path stroke="none" d="M0 0h35v35H0z" />
    <Path d="m25 15-15 15 15 15" />
  </Svg>
)
export default BackBtn
