import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import NavBar from './NavBar';

const Header = (props) => {
  const {location, title} = props;
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
      <div>
          <NavBar style={{marginBottom: '40px'}} location={location} />
          {location.pathname === rootPath && 
            <Link style={{boxShadow: `none`, color: `inherit`}} to={`/`}>
              <img src={'/logo.png'} />
            </Link>
          }
      </div>
    )
}

export default Header;