import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Header from './header'
import NavBar from './NavBar';

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
        //border: '1px solid blue'
      }}
    >
        <NavBar location={location} />
        {location && location.pathname === rootPath && 
              <img src={'/logo.png'} style={{margin: '30px 0 0'}} />
        }
        <div>{children}</div>
        <footer>
            <a href="https://www.youtube.com/channel/UCYN2oFv5nFNtgazsBvlwvmw">YouTube</a>&nbsp;&nbsp;
            <a href="https://www.facebook.com/pg/NghiTruongcom-114028710488039">Facebook</a><br/>
            © {new Date().getFullYear()}{` `}<a href="https://nghitruong.com">NghiTruong.com</a><br/>
        </footer>
    </div>
  )
}

export default Layout
