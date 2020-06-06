import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav style={{ width: `100%` }}>
    <ul style={{ display: `flex`, alignItems: `center` }}>
      <li style={{ listStyle: `none`, width: `25%` }}>
        <Link to="/">top</Link>
      </li>
      <li style={{ listStyle: `none`, width: `25%` }}>
        <Link to="/reading">読み物</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
