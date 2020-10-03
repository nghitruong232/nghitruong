import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Header = (props) => {
  const {location, title} = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  console.log('>>> props', props, rootPath);
  
  let header

  if (location.pathname === rootPath) {
    header = (
      <h3
        style={{
          ...scale(1),
          marginBottom: rhythm(1),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return header;
}



export default Header;