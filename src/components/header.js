import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Header = (props) => {
  const {location, title} = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
          <Link style={{boxShadow: `none`, color: `inherit`}} to={`/`}>
            <img src='/static/images/logo/NghiTruong_Logo_v2b2.png' />
          </Link>
      </div>
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