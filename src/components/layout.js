import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Header from './header'

const Layout = (props) => {
  const { location, title, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
      }}
    >
      <header><Header {...props} /></header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}{` `}<a href="https://nghitruong.com">NghiTruong.com</a><br/>
      </footer>
    </div>
  )
}

export default Layout
