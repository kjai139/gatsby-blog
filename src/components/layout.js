
import { Link } from 'gatsby'
import * as React from 'react'
import { 
    container,
    heading,
    navLinks
} from "./layout.module.css"
import "./styles/styles.css"

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={ container }>
      <nav>
        <ul className={navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout