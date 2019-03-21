import React from 'react'
import { Link } from "react-scroll"

const AnchorLink = ({children, classes, href}) => (
  <Link
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={classes}
  >
  {children}
  </Link>
)


export default AnchorLink